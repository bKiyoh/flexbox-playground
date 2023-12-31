export type FlexDirection = "column" | "column-reverse" | "row" | "row-reverse";

export type ContentPosition =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start";

export type ContentDistribution =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "stretch";

export type JustifyContent = ContentPosition | ContentDistribution;
