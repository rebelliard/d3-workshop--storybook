import { Chart } from "./common";

export interface ScatterPlotChartProps<Datum> extends Chart<Datum> {
  data: Array<Datum>;
}
