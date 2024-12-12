import type { TextProps as MTextProps } from "@mantine/core";
import { Text as MText } from "@mantine/core";
import type { FC } from "react";

import { cn } from "@/utils/function";

interface TextProps extends MTextProps {
  children: React.ReactNode;
  size?: keyof typeof sizes;
  onClick?: () => void;
}

const sizes = {
  "heading-1": "text-40xl/700",
  "heading-2": "text-32xl/700",
  "heading-3": "text-24xl/700",
  "heading-4": "text-18xl/700",
  "heading-5": "text-16xl/700",
  "heading-6": "text-12xl/700",
  "semibold-xl": "text-20md/600",
  "semibold-lg": "text-18md/600",
  "semibold-md": "text-16md/600",
  "semibold-sm": "text-14md/600",
  "semibold-xs": "text-12md/600",
  "semibold-xxs": "text-10md/600",
  "medium-xl": "text-20md/500",
  "medium-lg": "text-18md/500",
  "medium-md": "text-16md/500",
  "medium-sm": "text-14md/500",
  "medium-xs": "text-12md/500",
  xl: "text-20md/400",
  lg: "text-18md/400",
  md: "text-16md/400",
  sm: "text-14md/400",
  xs: "text-12md/400",
};

export const Text: FC<TextProps> = ({
  children,
  size = "sm",
  className,
  ...rest
}) => {
  const textSize = sizes[size as keyof typeof sizes];

  return (
    <MText {...rest} className={cn("text-gray-9", textSize, className)}>
      {children}
    </MText>
  );
};
