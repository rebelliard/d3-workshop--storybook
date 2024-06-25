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

  return (
    <g {...rest} textAnchor={"end"} transform={transform}>
      <line stroke="currentColor" strokeWidth={1} y1={lineStart} y2={lineEnd} />

      {items.map((d) => {
        const multiplier = -1;
        const tickLength = 6 * multiplier;
        const textMarginTop = tickLength + 3 * multiplier;
        const transform = `translate(0,${(tickScale(d) ?? 0) + tickPadding})`;

        return (
          <g key={d as string} transform={transform}>
            <line stroke="currentColor" x2={tickLength}></line>
            {!!gridWidth && <line x1={0} x2={gridWidth} stroke="#D2D7D3" strokeWidth={0.5} />}
            <text fill="currentColor" x={textMarginTop} dy="0.35em">
              {tickFormat?.(d) ?? (d as ReactNode)}
            </text>
          </g>
        );
      })}
    </g>
  );
}
