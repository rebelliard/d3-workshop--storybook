import { animated, useSprings } from "@react-spring/web";
import { ComponentProps, ReactNode } from "react";

interface VerticalAxisProps<Datum> extends ComponentProps<"g"> {
  items: Array<Datum>;
  range: Array<number>;
  transform?: string;
  tickScale: (d: Datum) => number | undefined;
  tickPadding?: number;
  tickFormat?: (d: Datum) => ReactNode;
  gridWidth?: number;
  transitionDuration?: number;
}

export function VerticalAxis<Datum>({
  items,
  range,
  transform,
  tickScale,
  tickPadding = 0,
  tickFormat,
  transitionDuration,
  gridWidth = 0,
  ...rest
}: VerticalAxisProps<Datum>) {
  const [lineStart, lineEnd] = range;

  const springs = useSprings(
    items.length,
    items.map((d) => {
      const translate = (tickScale(d) ?? 0) + tickPadding;

      return {
        to: {
          opacity: 1,
          transform: `translate(0,${translate})`,
        },
        config: {
          duration: transitionDuration,
        },
      };
    })
  );

  return (
    <g {...rest} textAnchor={"end"} transform={transform}>
      <line stroke="currentColor" strokeWidth={1} y1={lineStart} y2={lineEnd} />

      {items.map((d, i) => {
        const multiplier = -1;
        const tickLength = 6 * multiplier;
        const textMarginTop = tickLength + 3 * multiplier;
        const style = springs[i];

        return (
          <animated.g {...style} key={d as string}>
            <line stroke="currentColor" x2={tickLength}></line>
            {!!gridWidth && <line x1={0} x2={gridWidth} stroke="#D2D7D3" strokeWidth={0.5} />}
            <text fill="currentColor" x={textMarginTop} dy="0.35em">
              {tickFormat?.(d) ?? (d as ReactNode)}
            </text>
          </animated.g>
        );
      })}
    </g>
  );
}
