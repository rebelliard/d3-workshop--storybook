import { animated, useSprings } from "@react-spring/web";
import { ComponentProps, ReactNode } from "react";

interface HorizontalAxisProps<Datum> extends ComponentProps<"g"> {
  items: Array<Datum>;
  range: Array<number>;
  transform?: string;
  tickScale: (d: Datum) => number | undefined;
  tickPadding?: number;
  tickFormat?: (d: Datum) => ReactNode;
  gridHeight?: number;
  transitionDuration?: number;
}

export function HorizontalAxis<Datum>({
  items,
  range,
  transform,
  tickScale,
  tickPadding = 0,
  tickFormat,
  transitionDuration,
  gridHeight = 0,
  ...rest
}: HorizontalAxisProps<Datum>) {
  const [lineStart, lineEnd] = range;

  const springs = useSprings(
    items.length,
    items.map((d) => {
      const translate = (tickScale(d) ?? 0) + tickPadding;

      return {
        to: {
          opacity: 1,
          transform: `translate(${translate},0)`,
        },
        config: {
          duration: transitionDuration,
        },
      };
    })
  );

  return (
    <g {...rest} textAnchor={"middle"} transform={transform}>
      <line stroke="currentColor" strokeWidth={1} x1={lineStart} x2={lineEnd} />

      {items.map((d, i) => {
        const multiplier = 1;
        const tickLength = 6 * multiplier;
        const textMarginTop = tickLength + 3 * multiplier;
        const style = springs[i];

        return (
          <animated.g {...style} key={d as string}>
            <line stroke="currentColor" y2={tickLength}></line>
            {!!gridHeight && <line y1={0} y2={-gridHeight} stroke="#D2D7D3" strokeWidth={0.5} />}
            <text fill="currentColor" y={textMarginTop} dy="0.71em">
              {tickFormat?.(d) ?? (d as ReactNode)}
            </text>
          </animated.g>
        );
      })}
    </g>
  );
}
