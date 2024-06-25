import { scaleBand, scaleLinear } from "d3-scale";
import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../../constants/bar-chart";
import "../../../../styles/bar-chart.css";
import "../../../../styles/common.css";
import { BarChartProps } from "../../../../types/bar-chart";
import { useDimensions } from "../../../../utils/use-dimensions";
import { HorizontalAxis } from "../Axes/HorizontalAxis";
import { VerticalAxis } from "../Axes/VerticalAxis";
import { HorizontalBars } from "./HorizontalBars";

export function BarChart<Datum>({
  marginTop = CHART_DEFAULTS.marginTop,
  marginRight = CHART_DEFAULTS.marginRight,
  marginBottom = CHART_DEFAULTS.marginBottom,
  marginLeft = CHART_DEFAULTS.marginLeft,
  padding = CHART_DEFAULTS.padding,
  transitionDuration = CHART_DEFAULTS.transitionDuration,
  colors = [],
  data = [],
  labelAccessor,
  valueAccessor,
}: BarChartProps<Datum>) {
  const ref = useRef<SVGSVGElement>(null);
  const { width: rootWidth, height: rootHeight } = useDimensions(ref);
  const boundedWidth = rootWidth - marginRight - marginLeft;
  const boundedHeight = rootHeight - marginTop - marginBottom;

  /**
   * A discrete function would have values that stand alone,
   * but not have an interval around them.
   * @see https://d3js.org/d3-scale/band
   */
  const discreteValues = data.map(labelAccessor);
  const discreteScale = scaleBand()
    .domain(discreteValues)
    .padding(padding)
    .range([boundedHeight, 0]);
  const linearScale = scaleLinear()
    .domain([0, Math.max(...data.map(valueAccessor))])
    .range([0, boundedWidth]);
  const discreteAxisTransform: string | undefined = undefined;
  const linearAxisTransform = `translate(0, ${boundedHeight})`;

  return (
    <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}>
      <g data-name="bounds" transform={`translate(${marginLeft}, ${marginTop})`}>
        {rootHeight && (
          <HorizontalBars
            data={data}
            height={boundedHeight}
            linearScale={linearScale}
            discreteScale={discreteScale}
            colors={colors}
            labelAccessor={labelAccessor}
            valueAccessor={valueAccessor}
            transitionDuration={transitionDuration}
          />
        )}

        <VerticalAxis
          data-name="discrete-axis"
          tickScale={discreteScale}
          transform={discreteAxisTransform}
          items={discreteScale.domain()}
          range={discreteScale.range()}
          tickPadding={discreteScale.bandwidth() / 2}
          transitionDuration={transitionDuration}
        />

        <HorizontalAxis
          data-name="linear-axis"
          tickScale={linearScale}
          transform={linearAxisTransform}
          items={linearScale.ticks()}
          range={linearScale.range()}
          transitionDuration={transitionDuration}
        />
      </g>
    </svg>
  );
}
