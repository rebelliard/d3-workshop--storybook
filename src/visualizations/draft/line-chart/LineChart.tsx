import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../constants/line-chart";
import { LineChartProps } from "../../../types/line-chart";
import { useDimensions } from "../../../utils/use-dimensions";
import "../../../styles/common.css";

export function LineChart<Datum>({
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

  return <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}></svg>;
}
