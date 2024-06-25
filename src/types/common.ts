import { generateData } from "../utils/generate-data";

type Accessor<Datum, ValueType = unknown> = (d: Datum) => ValueType;

export interface Chart<Datum> {
  /**
   * @see https://d3js.org/d3-scale-chromatic/categorical
   */
  colors: readonly string[];
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  data: Array<Datum>;
  labelAccessor: Accessor<Datum, string>;
  valueAccessor: Accessor<Datum, number>;
  altValueAccessor: Accessor<Datum, number>;
  maxValue: number;
  itemCount: number;
  colorScheme?: string;
  transitionDuration?: number;
}

export type StoryDatum = ReturnType<typeof generateData>[number];
