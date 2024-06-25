import { animated, useSprings } from "@react-spring/web";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../constants/scatter-plot";
import { ScatterPlotChartProps } from "../../../types/scatter-plot";
import { useDimensions } from "../../../utils/use-dimensions";
import { HorizontalAxis } from "../../v2--animated/bar-chart/Axes/HorizontalAxis";
import { VerticalAxis } from "../../v2--animated/bar-chart/Axes/VerticalAxis";
import "../../../styles/common.css";

export function ScatterPlotChart<Datum>({
  marginTop = CHART_DEFAULTS.marginTop,
  marginRight = CHART_DEFAULTS.marginRight,
  marginBottom = CHART_DEFAULTS.marginBottom,
  marginLeft = CHART_DEFAULTS.marginLeft,
  maxValue = CHART_DEFAULTS.maxValue,
  transitionDuration = CHART_DEFAULTS.transitionDuration,
  colors = [],
  data = [],
  valueAccessor,
  altValueAccessor,
  labelAccessor,
}: ScatterPlotChartProps<Datum>) {
  const ref = useRef<SVGSVGElement>(null);
  const { width: rootWidth, height: rootHeight } = useDimensions(ref);
  const boundedWidth = rootWidth - marginRight - marginLeft;
  const boundedHeight = rootHeight - marginTop - marginBottom;

  // Scales
  const yScale = scaleLinear().domain([0, maxValue]).range([boundedHeight, 0]);
  const xScale = scaleLinear().domain([0, maxValue]).range([0, boundedWidth]);
  const colorScale = scaleOrdinal<string>().domain(data.map(labelAccessor)).range(colors);
  const horizontalAxisTransform = `translate(0, ${boundedHeight})`;

  const springs = useSprings(
    data.length,
    data.map((d) => {
      return {
        from: {
          r: 0,
          cx: 0,
          cy: 0, // boundedHeight,
          fillOpacity: 0,
        },
        to: {
          r: 13,
          fillOpacity: 0.5,
          cx: xScale(valueAccessor(d)),
          cy: yScale(altValueAccessor(d)),
        },
        config: {
          duration: transitionDuration,
        },
      };
    })
  );

  return (
    <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}>
      <g transform={`translate(${marginLeft}, ${marginTop})`}>
        <VerticalAxis
          data-name="linear-axis"
          tickScale={yScale}
          items={yScale.ticks()}
          range={yScale.range()}
          gridWidth={boundedWidth}
        />

        <HorizontalAxis
          data-name="discrete-axis"
          tickScale={xScale}
          transform={horizontalAxisTransform}
          items={xScale.ticks()}
          range={xScale.range()}
          gridHeight={boundedHeight}
        />

        {data.map((d, i) => {
          return (
            <g key={i}>
              <animated.circle
                stroke={colorScale(labelAccessor(d))}
                fill={colorScale(labelAccessor(d))}
                opacity={1}
                strokeWidth={1}
                {...springs[i]}
              />
              <title>
                {labelAccessor(d)} ({valueAccessor(d)})
              </title>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
