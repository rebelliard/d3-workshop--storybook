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

  return (
    <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}>
      <g data-name="bounds" transform={`translate(${marginLeft}, ${marginTop})`} fontSize="62.5%">
        <g
          data-name="centered-group"
          transform={`translate(${boundedWidth / 2}, ${boundedHeight / 2})`}
        >
          <g data-name="arcs">
            {arcs.map((d) => {
              const color = getArcColor(d.path);
              const value = valueAccessor(d.arc.data);
              const label = labelAccessor(d.arc.data);
              const textColor = hsl(color).l > 0.5 ? "#000" : "#fff";
              const pathD = arcGenerator({
                ...d.arc,
                startAngle: d.arc.startAngle,
                endAngle: d.arc.endAngle,
              });

              if (!pathD) {
                return null;
              }

              return (
                <g data-name="arc" key={label} data-value={value}>
                  <title>{label}</title>
                  <path d={pathD} fill={color} />
                  <text
                    transform={
                      arcs.length === 1 && innerRadius === 0
                        ? "translate(0,0)"
                        : `translate(${arcGenerator.centroid(d.arc)})`
                    }
                    dy={arcs.length === 1 && innerRadius === 0 ? "0.35em" : undefined}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize="1.4em"
                  >
                    {value || null}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      </g>
    </svg>
  );
}
