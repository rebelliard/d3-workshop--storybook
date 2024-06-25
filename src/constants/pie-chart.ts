import { StoryDatum } from "../types/common";
import { PieChartProps } from "../types/pie-chart";
import { COMMON_ARG_TYPES, COMMON_CHART_DEFAULTS, DATA_DEFAULTS, INITIAL_DATA } from "./common";

export const CHART_DEFAULTS = {
  itemCount: INITIAL_DATA.length,
  maxValue: DATA_DEFAULTS.max,
  innerRadius: 0,
  padAngle: 0,
  ...COMMON_CHART_DEFAULTS,
  transitionDuration: 500,
} as const satisfies Partial<PieChartProps<StoryDatum>>;

export const CHART_ARG_TYPES = {
  innerRadius: {
    control: {
      type: "range",
      min: 0,
      max: 0.99,
      step: 0.01,
    },
  },
  padAngle: {
    control: {
      type: "range",
      min: 0,
      max: 0.1,
      step: 0.001,
    },
  },
  ...COMMON_ARG_TYPES,
};
