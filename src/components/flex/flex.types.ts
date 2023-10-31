export type TFlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type TAlignItems = "start" | "center" | "end" | "stretch";

export type TFlexProps = {
  gap?: string;
  align?: TAlignItems;
  justify?: TAlignItems;
  direction?: "row" | "column";
  style?: any;
  children?: JSX.RChildren;
  wrap?: TFlexWrap;
};
