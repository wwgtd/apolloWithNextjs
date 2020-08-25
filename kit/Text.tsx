import React, { ReactNode } from "react";

const SIZES = {
  s: "12px",
  m: "16px",
  l: "22px",
} as const;

const COLORS = {
  neutral: "#000",
  active: "#cccccc",
  error: "red",
} as const;

export const Text = ({
  size = "m",
  bold = false,
  type = "neutral",
  children,
}: {
  size?: keyof typeof SIZES;
  bold?: boolean;
  type?: keyof typeof COLORS;
  children: ReactNode;
}) => (
  <span className={"text"}>
    {children}
    <style jsx>
      {`
                .text {
                font-size: ${SIZES[size]};
                color: ${COLORS[type]};
                font-weight: ${bold ? "700" : "500"}    
            `}
    </style>
  </span>
);
