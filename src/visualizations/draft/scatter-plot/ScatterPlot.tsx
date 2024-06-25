import { useRef } from "react";
import { CHART_DEFAULTS } from "../../../constants/scatter-plot";
import { ScatterPlotChartProps } from "../../../types/scatter-plot";
import { useDimensions } from "../../../utils/use-dimensions";
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
}: ScatterPlotChartProps<Datum>) {
  const ref = useRef<SVGSVGElement>(null);
  const { width: rootWidth, height: rootHeight } = useDimensions(ref);

  return <svg ref={ref} className="chart" width={rootWidth} height={rootHeight}></svg>;
}
