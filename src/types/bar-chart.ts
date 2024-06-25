import { Chart } from "./common";

export interface BarChartProps<Datum> extends Chart<Datum> {
  /**
   * Sets both the inner and outer padding to the band.
   * The value ranges between 0 and 1.
   * @see https://d3js.org/d3-scale/band#band_padding
   */
  padding?: number;
}

export interface MergedBarChartProps<Datum> extends BarChartProps<Datum> {
  orientation: "horizontal" | "vertical";
}
