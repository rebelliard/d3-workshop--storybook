import type { Meta, StoryObj } from "@storybook/react";
import { CHART_ARG_TYPES, CHART_DEFAULTS } from "../../../constants/scatter-plot";
import { StoryDatum } from "../../../types/common";
import { ScatterPlotChartProps as ChartProps } from "../../../types/scatter-plot";
import { StoryDecorator } from "../../../utils/StoryDecorator/StoryDecorator";
import { ScatterPlotChart as Chart } from "./ScatterPlot";

type StoryMeta = Meta<typeof Chart<StoryDatum>>;

const meta = {
  title: "Visualizations/v2 (animated)/Scatter Plot",
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
