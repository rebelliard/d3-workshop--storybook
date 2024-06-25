import { ScaleBand, ScaleLinear, scaleOrdinal } from "d3-scale";
import { BarChartProps } from "../../../../types/bar-chart";

interface BarsProps<Datum>
  extends Pick<
    BarChartProps<Datum>,
    "data" | "labelAccessor" | "valueAccessor" | "colors" | "transitionDuration"
  > {
  height: number;
  discreteScale: ScaleBand<string>;
  linearScale: ScaleLinear<number, number>;
}

export function VerticalBars<Datum>({
  data,
  labelAccessor,
  valueAccessor,
  height: boundedHeight,
  discreteScale,
  linearScale,
  colors,
  transitionDuration,
}: BarsProps<Datum>) {
  const getBandColor = scaleOrdinal(colors).domain(discreteScale.domain());

  return (
    <g data-name="bars">
      {data.map((d) => {
        const label = labelAccessor(d);
        const value = valueAccessor(d);
        const bandColor = getBandColor(label);

        return (
          <g className="bar" data-value={value} key={label}>
            <rect
              fill={bandColor}
              rx="5"
              ry="5"
              x={discreteScale(label)}
              y={linearScale(value)}
              width={discreteScale.bandwidth()}
              height={boundedHeight - linearScale(value)}
            />
            <title>{value}</title>
          </g>
        );
      })}
    </g>
  );
}
