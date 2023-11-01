import type { TAlignItems } from "./flex.types";
import { TFlexProps } from "./flex.types";

const ALIGN_VALUE_MAP: Record<TAlignItems, string> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
};

const getStyles = (params: Omit<TFlexProps, "children" | "style">) => {
  const alignValue = params.align && ALIGN_VALUE_MAP[params.align];
  const justifyValue = params.justify && ALIGN_VALUE_MAP[params.justify];

  return {
    display: "flex",
    flexDirection: params.direction,
    gap: params.gap,
    alignItems: alignValue,
    justifyContent: justifyValue,
    flexWrap: params.wrap,
  };
};

export const Flex = ({
  gap,
  align,
  justify,
  direction,
  wrap,
  style,
  children,
}: TFlexProps) => {
  return (
    <div
      style={{
        ...getStyles({ gap, align, justify, direction, wrap }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
