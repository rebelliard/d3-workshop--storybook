import { BarChartProps } from "../types/bar-chart";
import { StoryDatum } from "../types/common";
import { COMMON_ARG_TYPES, COMMON_CHART_DEFAULTS, DATA_DEFAULTS, INITIAL_DATA } from "./common";

export const CHART_DEFAULTS = {
  itemCount: INITIAL_DATA.length,
  maxValue: DATA_DEFAULTS.max,
  padding: 0.3,
  ...COMMON_CHART_DEFAULTS,
  marginLeft: 120,
} as const satisfies Partial<BarChartProps<StoryDatum>>;

export const CHART_ARG_TYPES = {
  padding: {
    control: {
      type: "range",
      min: 0,
      max: 1,
      step: 0.1,
    },
  },
  ...COMMON_ARG_TYPES,
} as const;
