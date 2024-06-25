import { scaleBand, scaleLinear } from "d3-scale";
import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../../constants/bar-chart";
import "../../../../styles/bar-chart.css";
import "../../../../styles/common.css";
import { MergedBarChartProps } from "../../../../types/bar-chart";
import { useDimensions } from "../../../../utils/use-dimensions";
import { Axis } from "./Axis";
import { Bars } from "./Bars";

export function BarChart<Datum>({
  marginTop = CHART_DEFAULTS.marginTop,
  marginRight = CHART_DEFAULTS.marginRight,
  marginBottom = CHART_DEFAULTS.marginBottom,
  marginLeft = CHART_DEFAULTS.marginLeft,
  transitionDuration = CHART_DEFAULTS.transitionDuration,
  padding = CHART_DEFAULTS.padding,
  colors = [],
  data = [],
  orientation,
  labelAccessor,
  valueAccessor,
}: MergedBarChartProps<Datum>) {
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
  const discreteScale = scaleBand().domain(discreteValues).padding(padding);
  const linearScale = scaleLinear().domain([0, Math.max(...data.map(valueAccessor))]);
  let discreteAxisTransform: string | undefined = undefined;
  let linearAxisTransform: string | undefined = undefined;

  if (orientation === "horizontal") {
    discreteScale.range([boundedHeight, 0]);
    linearScale.range([0, boundedWidth]);
    linearAxisTransform = `translate(0, ${boundedHeight})`;
  } else {
    discreteScale.range([0, boundedWidth]);
    linearScale.range([boundedHeight, 0]);
    discreteAxisTransform = `translate(0, ${boundedHeight})`;
  }

  return (
    <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}>
      <g data-name="bounds" transform={`translate(${marginLeft}, ${marginTop})`}>
        <Axis
          data-name="discrete-axis"
          tickScale={discreteScale}
          orientation={orientation}
          transform={discreteAxisTransform}
          items={discreteScale.domain()}
          range={discreteScale.range()}
          tickPadding={discreteScale.bandwidth() / 2}
          transitionDuration={transitionDuration}
        />

        <Axis
          data-name="linear-axis"
          tickScale={linearScale}
          orientation={orientation === "horizontal" ? "vertical" : "horizontal"}
          transform={linearAxisTransform}
          items={linearScale.ticks()}
          range={linearScale.range()}
          transitionDuration={transitionDuration}
        />

        {rootHeight && (
          <Bars
            data={data}
            height={boundedHeight}
            orientation={orientation}
            linearScale={linearScale}
            discreteScale={discreteScale}
            colors={colors}
            labelAccessor={labelAccessor}
            valueAccessor={valueAccessor}
            transitionDuration={transitionDuration}
          />
        )}
      </g>
    </svg>
  );
}
