import { animated, useSprings } from "@react-spring/web";
import { hsl } from "d3-color";
import { scaleOrdinal } from "d3-scale";
import {
  DefaultArcObject,
  PieArcDatum,
  arc as arcConstructor,
  pie as pieConstructor,
} from "d3-shape";
import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../constants/pie-chart";
import { PieChartProps } from "../../../types/pie-chart";
import { useDimensions } from "../../../utils/use-dimensions";
import "../../../styles/common.css";

type Arc<Datum> = {
  arc: PieArcDatum<Datum> & DefaultArcObject;
  path: string;
};

const isArcDefined = <Datum,>(item: Arc<Datum> | null): item is Arc<Datum> => {
  return !!item;
};

export function PieChart<Datum>({
  marginTop = CHART_DEFAULTS.marginTop,
  marginRight = CHART_DEFAULTS.marginRight,
  marginBottom = CHART_DEFAULTS.marginBottom,
  marginLeft = CHART_DEFAULTS.marginLeft,
  transitionDuration = CHART_DEFAULTS.transitionDuration,
  colors = [],
  data = [],
  innerRadius = CHART_DEFAULTS.innerRadius,
  padAngle = CHART_DEFAULTS.padAngle,
  labelAccessor,
  valueAccessor,
}: PieChartProps<Datum>) {
  const ref = useRef<SVGSVGElement>(null);
  const { width: rootWidth, height: rootHeight } = useDimensions(ref);
  const boundedWidth = rootWidth - marginRight - marginLeft;
  const boundedHeight = rootHeight - marginTop - marginBottom;

  const pieGenerator = pieConstructor<Datum>().padAngle(padAngle).value(valueAccessor);
  const pie = pieGenerator(data);

  const arcGenerator = arcConstructor();
  const outerRadius = Math.min(boundedWidth, boundedHeight) / 2;

  const arcs = pie
    .map((p) => {
      const arc = {
        innerRadius: outerRadius * innerRadius,
        outerRadius: outerRadius,
        ...p,
      };
      const path = arcGenerator(arc);

      if (!path) {
        return null;
      }

      return { arc, path };
    })
    .filter(isArcDefined);

  const getArcColor = scaleOrdinal(colors).domain(arcs.map((d) => d.path));

  const springs = useSprings(
    arcs.length,
    arcs.map((d) => {
      return {
        from: {
          opacity: 0,
        },
        to: {
          position: [d.arc.startAngle, d.arc.endAngle] as [number, number],
          transform:
            arcs.length === 1 && innerRadius === 0
              ? "translate(0,0)"
              : `translate(${arcGenerator.centroid(d.arc)})`,
          opacity: 1,
        },
        config: {
          duration: transitionDuration,
        },
      };
    })
  );

  return (
    <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}>
      <g
        data-name="bounds"
        width={boundedWidth}
        height={boundedHeight}
        transform={`translate(${marginLeft}, ${marginTop})`}
        fontSize="62.5%"
      >
        <g
          data-name="centered-group"
          transform={`translate(${boundedWidth / 2}, ${boundedHeight / 2})`}
        >
          <g data-name="arcs">
            {arcs.map((arc, i) => {
              const color = getArcColor(arc.path);
              const value = valueAccessor(arc.arc.data);
              const label = labelAccessor(arc.arc.data);
              const textColor = hsl(color).l > 0.5 ? "#000" : "#fff";
              const style = springs[i];
              const pathD = style.position.to((startAngle, endAngle) =>
                arcGenerator({
                  ...arc.arc,
                  startAngle,
                  endAngle,
                })
              );
              return (
                <g data-name="arc" key={label} data-value={value}>
                  <title>{label}</title>
                  <animated.path d={pathD} fill={color} />
                  <animated.text
                    transform={style.transform}
                    dy={arcs.length === 1 && innerRadius === 0 ? "0.35em" : undefined}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize="1.4em"
                    opacity={style.opacity}
                  >
                    {value || null}
                  </animated.text>
                </g>
              );
            })}
          </g>
        </g>
      </g>
    </svg>
  );
}
