import type { Meta, StoryObj } from "@storybook/react";
import { CHART_ARG_TYPES, CHART_DEFAULTS } from "../../../../constants/bar-chart";
import { MergedBarChartProps as ChartProps } from "../../../../types/bar-chart";
import { StoryDatum } from "../../../../types/common";
import { StoryDecorator } from "../../../../utils/StoryDecorator/StoryDecorator";
import { BarChart as Chart } from "./MergedBarChart";

type StoryMeta = Meta<typeof Chart<StoryDatum>>;

const meta = {
  title: "Visualizations/v2 (animated)/Bar chart",
  component: Chart<StoryDatum>,
  argTypes: CHART_ARG_TYPES as StoryMeta["argTypes"],
  decorators: [StoryDecorator] as unknown as StoryMeta["decorators"],
} satisfies StoryMeta;

export default meta;
type Story = StoryObj<typeof meta>;

const initialProps = {
  orientation: "horizontal",
  ...CHART_DEFAULTS,
} satisfies ChartProps<StoryDatum>;

export const Merged: Story = {
  args: {
    ...initialProps,
  },
};
