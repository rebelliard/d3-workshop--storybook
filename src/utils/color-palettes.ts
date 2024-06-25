import {
  schemeSet1,
  schemeSet2,
  schemeDark2,
  schemePaired,
  schemeCategory10,
  schemeTableau10,
} from "d3-scale-chromatic";

/**
 * Qualitative palettes do not imply magnitude differences
 * between legend classes, and hues are used to create
 * the primary visual differences between classes.
 * Qualitative schemes are best suited to representing
 * nominal or categorical data.
 * @see https://d3js.org/d3-scale-chromatic/categorical
 * @see https://r-graph-gallery.com/38-rcolorbrewers-palettes.html
 */
export const colorPalette = {
  "category 10": schemeCategory10,
  "dark 2": schemeDark2,
  paired: schemePaired,
  "set 1": schemeSet1,
  "set 2": schemeSet2,
  "tableau 10": schemeTableau10,
} as const;

export type ColorPalette = keyof typeof colorPalette;
