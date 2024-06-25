import { Chart } from "./common";

export interface LineChartProps<Datum> extends Chart<Datum> {
  data: Array<Datum>;
}
