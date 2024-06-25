import { StoryDatum } from "../types/common";
import { ScatterPlotChartProps } from "../types/scatter-plot";
import {
  COMMON_ARG_TYPES,
  COMMON_CHART_DEFAULTS,
  DATA_DEFAULTS,
  INITIAL_DATA_LARGE,
} from "./common";

export const CHART_DEFAULTS = {
  itemCount: INITIAL_DATA_LARGE.length,
  maxValue: DATA_DEFAULTS.max,
  ...COMMON_CHART_DEFAULTS,
  data: INITIAL_DATA_LARGE,
  transitionDuration: 700,
} as const satisfies Partial<ScatterPlotChartProps<StoryDatum>>;

export const CHART_ARG_TYPES = {
  ...COMMON_ARG_TYPES,
  itemCount: {
    control: {
      type: "range",
      min: 1,
      max: 100,
      step: 1,
    },
  },
};
