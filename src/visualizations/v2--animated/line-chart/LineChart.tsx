import { animated, useSpring, useSprings } from "@react-spring/web";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { curveCatmullRom, line } from "d3-shape";
import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../constants/line-chart";
import "../../../styles/common.css";
import { LineChartProps } from "../../../types/line-chart";
import { useDimensions } from "../../../utils/use-dimensions";
import { HorizontalAxis } from "../../v2--animated/bar-chart/Axes/HorizontalAxis";
import { VerticalAxis } from "../../v2--animated/bar-chart/Axes/VerticalAxis";

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

  const [lineStyle] = useSpring(
    {
      // from: {
      //   d: linePath,
      // },
      to: {
        d: linePath,
      },
      config: {
        duration: transitionDuration,
      },
    },
    [linePath]
  );

  const springs = useSprings(
    data.length,
    data.map(() => {
      return {
        from: {
          r: 0,
          fillOpacity: 0,
        },
        to: {
          r: 5,
          fillOpacity: 0.5,
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

        <animated.path stroke="steelblue" strokeWidth={2} fill="none" d={lineStyle.d} />

        {data.map((d, i) => {
          return (
            <g key={i} data-name="points">
              <animated.circle
                stroke={colorScale(labelAccessor(d))}
                fill={colorScale(labelAccessor(d))}
                opacity={1}
                strokeWidth={1}
                cx={xScale(valueAccessor(d))}
                cy={yScale(altValueAccessor(d))}
                {...springs[i]}
              >
                <title>
                  {labelAccessor(d)} ({valueAccessor(d)})
                </title>
              </animated.circle>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
