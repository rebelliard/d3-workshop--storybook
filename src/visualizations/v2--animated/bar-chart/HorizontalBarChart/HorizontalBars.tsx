import { animated, useSprings } from "@react-spring/web";
import { ScaleBand, ScaleLinear, scaleOrdinal } from "d3-scale";
import { BarChartProps } from "../../../../types/bar-chart";

interface HorizontalBarsProps<Datum>
  extends Pick<
    BarChartProps<Datum>,
    "data" | "labelAccessor" | "valueAccessor" | "colors" | "transitionDuration"
  > {
  height: number;
  discreteScale: ScaleBand<string>;
  linearScale: ScaleLinear<number, number>;
}

export function HorizontalBars<Datum>({
  data,
  labelAccessor,
  valueAccessor,
  discreteScale,
  linearScale,
  colors,
  transitionDuration,
}: HorizontalBarsProps<Datum>) {
  const getBandColor = scaleOrdinal(colors).domain(discreteScale.domain());

  const springs = useSprings(
    data.length,
    data.map((d) => {
      const label = labelAccessor(d);
      const value = valueAccessor(d);

      const { width, height, x, y } = {
        x: linearScale(linearScale.range()[0]),
        y: discreteScale(label),
        width: linearScale(value),
        height: discreteScale.bandwidth(),
      };

      return {
        to: {
          width,
          x,
          y,
          height,
        },
        config: {
          duration: transitionDuration,
        },
      };
    })
  );

  return (
    <g data-name="bars">
      {data.map((d, i) => {
        const label = labelAccessor(d);
        const value = valueAccessor(d);
        const bandColor = getBandColor(label);
        const style = springs[i];

        return (
          <g className="bar" data-value={value} key={label}>
            <animated.rect fill={bandColor} rx="5" ry="5" {...style} />
            <title>{value}</title>
          </g>
        );
      })}
    </g>
  );
}
