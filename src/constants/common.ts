import { schemeTableau10 } from "d3-scale-chromatic";
import { Chart, StoryDatum } from "../types/common";
import { colorPalette } from "../utils/color-palettes";

export const INITIAL_DATA = [
  { label: "ghost", value: 16, goal: 30 },
  { label: "jalapeño", value: 41, goal: 22 },
  { label: "habanero", value: 24, goal: 19 },
  { label: "bell", value: 50, goal: 50 },
  { label: "scotch", value: 20, goal: 45 },
];

export const INITIAL_DATA_LARGE = [
  { label: "ghost", value: 16, goal: 30 },
  { label: "jalapeño", value: 41, goal: 22 },
  { label: "habanero", value: 24, goal: 19 },
  { label: "bell", value: 50, goal: 50 },
  { label: "scotch", value: 20, goal: 45 },
  { label: "strobe", value: 41, goal: 26 },
  { label: "republican", value: 16, goal: 33 },
  { label: "sidewalk", value: 27, goal: 15 },
  { label: "tailspin", value: 6, goal: 8 },
  { label: "saviour", value: 38, goal: 1 },
  { label: "counsel", value: 40, goal: 43 },
  { label: "exhaust", value: 20, goal: 49 },
  { label: "brunch", value: 33, goal: 14 },
  { label: "pamphlet", value: 35, goal: 49 },
  { label: "sail", value: 39, goal: 42 },
];

export const DATA_DEFAULTS = {
  count: INITIAL_DATA.length,
  min: 0,
  max: 50,
} as const;

export const COMMON_CHART_DEFAULTS = {
  colorScheme: "tableau 10",
  colors: schemeTableau10,
  marginTop: 30,
  marginRight: 30,
  marginBottom: 40,
  marginLeft: 45,
  transitionDuration: 100,
  data: INITIAL_DATA,
  labelAccessor: (d) => d.label,
  valueAccessor: (d) => d.value,
  altValueAccessor: (d) => d.goal,
} as const satisfies Partial<Chart<StoryDatum>>;

export const COMMON_ARG_TYPES = {
  colorScheme: {
    control: "inline-radio",
    options: Object.keys(colorPalette),
  },
  itemCount: {
    control: {
      min: 1,
      max: 10,
      step: 1,
    },
  },
  maxValue: {
    control: {
      type: "range",
      min: 1,
      max: 100,
      step: 1,
    },
  },
  transitionDuration: {
    control: {
      min: 1,
      max: 3000,
      step: 1,
    },
  },
  colors: { table: { disable: true } },
  labelAccessor: { table: { disable: true } },
  valueAccessor: { table: { disable: true } },
  altValueAccessor: { table: { disable: true } },
  data: { table: { disable: true } },
};
