import { ScaleBand, ScaleLinear, scaleOrdinal } from "d3-scale";
import { MergedBarChartProps } from "../../../../types/bar-chart";

interface BarsProps<Datum>
  extends Pick<
    MergedBarChartProps<Datum>,
    "data" | "labelAccessor" | "valueAccessor" | "colors" | "orientation" | "transitionDuration"
  > {
  height: number;
  discreteScale: ScaleBand<string>;
  linearScale: ScaleLinear<number, number>;
}

export function Bars<Datum>({
  data,
  orientation,
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
        const props =
          orientation === "horizontal"
            ? {
                x: linearScale(linearScale.range()[0]),
                y: discreteScale(label),
                width: linearScale(value),
                height: discreteScale.bandwidth(),
              }
            : {
                x: discreteScale(label),
                y: linearScale(value),
                width: discreteScale.bandwidth(),
                height: boundedHeight - linearScale(value),
              };

        return (
          <g className="bar" data-value={value} key={label}>
            <rect fill={bandColor} rx="5" ry="5" {...props} />
            <title>{value}</title>
          </g>
        );
      })}
    </g>
  );
}
