import { ComponentProps, ReactNode } from "react";
import { MergedBarChartProps } from "../../../../types/bar-chart";

interface AxisProps<Datum>
  extends Pick<MergedBarChartProps<Datum>, "orientation" | "transitionDuration">,
    Omit<ComponentProps<"g">, "orientation"> {
  items: Array<Datum>;
  range: Array<number>;
  transform?: string;
  tickScale: (d: Datum) => number | undefined;
  tickPadding?: number;
  tickFormat?: (d: Datum) => ReactNode;
}

export function Axis<Datum>({
  items,
  orientation,
  range,
  transform,
  tickScale,
  tickPadding = 0,
  tickFormat,
  transitionDuration,
  ...rest
}: AxisProps<Datum>) {
  const [lineStart, lineEnd] = range;

  return (
    <g {...rest} textAnchor={orientation === "horizontal" ? "end" : "middle"} transform={transform}>
      <line
        stroke="currentColor"
        strokeWidth={1}
        {...(orientation === "horizontal"
          ? {
              y1: lineStart,
              y2: lineEnd,
            }
          : {
              x1: lineStart,
              x2: lineEnd,
            })}
      />

      {items.map((d) => {
        const multiplier = orientation === "horizontal" ? -1 : 1;
        const tickLength = 6 * multiplier;
        const textMarginTop = tickLength + 3 * multiplier;
        const translate = (tickScale(d) ?? 0) + tickPadding;

        return (
          <g
            key={d as string}
            transform={
              orientation === "horizontal"
                ? `translate(0,${translate})`
                : `translate(${translate},0)`
            }
          >
            <line
              stroke="currentColor"
              {...(orientation === "horizontal" ? { x2: tickLength } : { y2: tickLength })}
            ></line>
            <text
              fill="currentColor"
              {...(orientation === "horizontal"
                ? { x: textMarginTop, dy: "0.35em" }
                : { y: textMarginTop, dy: "0.71em" })}
            >
              {tickFormat?.(d) ?? (d as ReactNode)}
            </text>
          </g>
        );
      })}
    </g>
  );
}
