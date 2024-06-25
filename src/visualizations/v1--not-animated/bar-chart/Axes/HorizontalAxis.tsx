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

  return (
    <g {...rest} textAnchor={"middle"} transform={transform}>
      <line stroke="currentColor" strokeWidth={1} x1={lineStart} x2={lineEnd} />

      {items.map((d) => {
        const multiplier = 1;
        const tickLength = 6 * multiplier;
        const textMarginTop = tickLength + 3 * multiplier;
        const transform = `translate(${(tickScale(d) ?? 0) + tickPadding},0)`;

        return (
          <g key={d as string} transform={transform}>
            <line stroke="currentColor" y2={tickLength}></line>
            {!!gridHeight && <line y1={0} y2={-gridHeight} stroke="#D2D7D3" strokeWidth={0.5} />}
            <text fill="currentColor" y={textMarginTop} dy="0.71em">
              {tickFormat?.(d) ?? (d as ReactNode)}
            </text>
          </g>
        );
      })}
    </g>
  );
}
