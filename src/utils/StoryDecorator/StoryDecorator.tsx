import { faker } from "@faker-js/faker";
import { useArgs } from "@storybook/preview-api";
import { ReactRenderer, StoryContext, StoryFn } from "@storybook/react";
import { MouseEventHandler, useCallback, useLayoutEffect } from "react";
import usePrevious from "use-previous";
import { DATA_DEFAULTS } from "../../constants/common";
import { Chart } from "../../types/common";
import { colorPalette } from "../color-palettes";
import { generateData } from "../generate-data";
import "./StoryDecorator.css";

export function StoryDecorator(Story: StoryFn<ReactRenderer>, ctx: StoryContext<ReactRenderer>) {
  const [_args, setArgs] = useArgs<typeof ctx.args>();
  const args = _args as unknown as Chart<ReturnType<typeof generateData>>;
  const previousItemCount = usePrevious(args.itemCount);
  const previousMaxValue = usePrevious(args.maxValue);

  useLayoutEffect(() => {
    if (
      previousItemCount !== undefined &&
      (previousItemCount !== args.itemCount || previousMaxValue !== args.maxValue)
    ) {
      if (previousItemCount > args.itemCount) {
        setArgs({
          data: args.data.slice(0, args.itemCount),
        } as any);
        return;
      }

      if (previousItemCount < args.itemCount) {
        setArgs({
          data: args.data.concat(
            generateData({
              count: args.itemCount - args.data.length,
              max: args.maxValue ?? DATA_DEFAULTS.max,
            })
          ),
        } as any);
        return;
      }

      if (previousMaxValue !== args.maxValue) {
        setArgs({
          data: args.data.map((d) => ({
            ...d,
            value: faker.number.int({
              min: DATA_DEFAULTS.min,
              max: args.maxValue,
            }),
          })),
        } as any);
        return;
      }

      setArgs({
        data: generateData({
          count: args.itemCount ?? DATA_DEFAULTS.count,
          max: args.maxValue ?? DATA_DEFAULTS.max,
        }),
        generated: true,
      } as any);
    }
  }, [
    args.data,
    args.data.length,
    args.itemCount,
    args.maxValue,
    previousItemCount,
    previousMaxValue,
    setArgs,
  ]);

  // @ts-expect-error Invalid prop
  const colorScheme = ctx.args.colorScheme as keyof typeof colorPalette | undefined;

  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      setArgs({
        data: generateData({
          count: args.itemCount ?? DATA_DEFAULTS.count,
          max: args.maxValue ?? DATA_DEFAULTS.max,
        }),
      } as any);
    },
    [args.itemCount, args.maxValue, setArgs]
  );

  return (
    <>
      <main style={{ position: "relative", width: "100wh", height: "90vh" }}>
        <button
          className="new-data-button"
          type="button"
          onClick={onClick}
          title="Generate new data"
        >
          🆕
        </button>
        <Story
          // @ts-expect-error Invalid type
          args={{
            ...ctx.args,
            // @ts-expect-error Invalid prop
            colors: colorScheme ? colorPalette[colorScheme] : ctx.args.colors,
          }}
        />
      </main>
    </>
  );
}
