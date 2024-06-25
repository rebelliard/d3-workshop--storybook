import { Chart } from "./common";

export interface PieChartProps<Datum> extends Chart<Datum> {
  innerRadius?: number;
  padAngle?: number;
  data: Array<Datum>;
}
