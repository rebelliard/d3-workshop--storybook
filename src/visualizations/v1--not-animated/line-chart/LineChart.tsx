import { scaleLinear, scaleOrdinal } from "d3-scale";
import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../constants/line-chart";
import { LineChartProps } from "../../../types/line-chart";
import { useDimensions } from "../../../utils/use-dimensions";
import { HorizontalAxis } from "../../v1--not-animated/bar-chart/Axes/HorizontalAxis";
import { VerticalAxis } from "../../v1--not-animated/bar-chart/Axes/VerticalAxis";
import "../../../styles/common.css";
import { curveCardinal, curveCatmullRom, line } from "d3-shape";

export function LineChart<Datum>({
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
}: LineChartProps<Datum>) {
  const ref = useRef<SVGSVGElement>(null);
  const { width: rootWidth, height: rootHeight } = useDimensions(ref);
  const boundedWidth = rootWidth - marginRight - marginLeft;
  const boundedHeight = rootHeight - marginTop - marginBottom;

  // Scales
  const yScale = scaleLinear().domain([0, maxValue]).range([boundedHeight, 0]);
  const xScale = scaleLinear().domain([0, maxValue]).range([0, boundedWidth]);
  const colorScale = scaleOrdinal<string>().domain(data.map(labelAccessor)).range(colors);
  const horizontalAxisTransform = `translate(0, ${boundedHeight})`;

  const lineBuilder = line<Datum>()
    .x((d) => xScale(valueAccessor(d)))
    .y((d) => yScale(altValueAccessor(d)))
    .curve(curveCatmullRom.alpha(0.5));

  const linePath = lineBuilder(data.sort((a, b) => valueAccessor(a) - valueAccessor(b)));

  return (
    <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}>
      <g
        width={boundedWidth}
        height={boundedHeight}
        transform={`translate(${marginLeft}, ${marginTop})`}
        fontSize="14"
      >
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

        {!!linePath && <path stroke="steelblue" strokeWidth={2} fill="none" d={linePath} />}

        {data.map((d, i) => {
          return (
            <g key={i} data-name="points">
              <circle
                r={5}
                cx={xScale(valueAccessor(d))}
                cy={yScale(altValueAccessor(d))}
                stroke={colorScale(labelAccessor(d))}
                fill={colorScale(labelAccessor(d))}
                fillOpacity={0.5}
                opacity={1}
                strokeWidth={1}
              >
                <title>
                  {labelAccessor(d)} ({valueAccessor(d)})
                </title>
              </circle>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
