import React from "react";
import "./Tarp.scss";

export declare namespace Tarp {
  interface Props {
    children?: React.ReactNode;
    className?: string;
  }
}

export const Tarp: React.FC<Tarp.Props> = ({ children, className }) => {
  return <div className={`tarp ${className}`}>{children}</div>;
};
