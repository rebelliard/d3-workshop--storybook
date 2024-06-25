import type { Meta, StoryObj } from "@storybook/react";
import { CHART_ARG_TYPES, CHART_DEFAULTS } from "../../../constants/pie-chart";
import { StoryDatum } from "../../../types/common";
import { PieChartProps as ChartProps } from "../../../types/pie-chart";
import { StoryDecorator } from "../../../utils/StoryDecorator/StoryDecorator";
import { PieChart as Chart } from "./PieChart";

type StoryMeta = Meta<typeof Chart<StoryDatum>>;

const meta = {
  title: "Visualizations/Draft/Pie chart",
  component: Chart<StoryDatum>,
  argTypes: CHART_ARG_TYPES as StoryMeta["argTypes"],
  decorators: [StoryDecorator] as unknown as StoryMeta["decorators"],
} satisfies StoryMeta;

export default meta;
type Story = StoryObj<typeof meta>;

const initialProps = {
  ...CHART_DEFAULTS,
} satisfies ChartProps<StoryDatum>;

export const Primary: Story = {
  args: {
    ...initialProps,
  },
};

export const Donut: Story = {
  args: {
    ...initialProps,
    innerRadius: 0.5,
  },
};
