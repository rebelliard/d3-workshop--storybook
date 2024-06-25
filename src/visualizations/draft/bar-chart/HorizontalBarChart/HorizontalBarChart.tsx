import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../../constants/bar-chart";
import "../../../../styles/bar-chart.css";
import "../../../../styles/common.css";
import { BarChartProps } from "../../../../types/bar-chart";
import { useDimensions } from "../../../../utils/use-dimensions";

export function BarChart<Datum>({
  marginTop = CHART_DEFAULTS.marginTop,
  marginRight = CHART_DEFAULTS.marginRight,
  marginBottom = CHART_DEFAULTS.marginBottom,
  marginLeft = CHART_DEFAULTS.marginLeft,
  padding = CHART_DEFAULTS.padding,
  colors = [],
  data = [],
  labelAccessor,
  valueAccessor,
}: BarChartProps<Datum>) {
  const ref = useRef<SVGSVGElement>(null);
  const { width: rootWidth, height: rootHeight } = useDimensions(ref);

  return <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}></svg>;
}
