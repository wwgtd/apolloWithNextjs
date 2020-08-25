import { ReactNode } from "react";
import React from "react";

const BG = {
  neutral: "#7e7e7e",
  active: "#5e7e7e",
} as const;

export const Button = ({
  children,
  onClick,
  bg = "neutral",
}: {
  bg?: keyof typeof BG;
  children: ReactNode;
  onClick: () => void;
}) => (
  <div className={`button`} onClick={onClick}>
    {children}
    <style jsx>{`
    .button {
        display: flex;
        justify-content: center;
        background-color: ${BG[bg]};     
        border: 1px solid black;
        border-radius: 5px;        
        padding: 15px;
        cursor: pointer;
    `}</style>
  </div>
);
