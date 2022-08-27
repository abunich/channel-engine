import React, { ReactNode } from "react";
import "./DataItem.scss";

export declare namespace DataItem {
  interface Props {
    children: ReactNode;
    className?: string;
  }
}

export const DataItem: React.FC<DataItem.Props> = ({ children, className = "" }) => {
  return <div className={`data-item ${className}`}>{children}</div>;
};
