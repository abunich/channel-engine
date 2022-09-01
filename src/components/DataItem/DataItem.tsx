import React, { ReactNode } from "react";
import "./DataItem.scss";

export declare namespace DataItem {
  interface Props {
    title: string | React.ReactNode;
    children: ReactNode;
    isColon?: boolean;
    isReversedColors?: boolean;
    className?: string;
  }
}

export const DataItem: React.FC<DataItem.Props> = ({
  title,
  children,
  isColon = false,
  isReversedColors = false,
  className = "",
}) => {
  if (!children) {
    return null;
  }

  const reversedColorsClassName = isReversedColors ? " data-item_reversed-colors" : "";
  const additionalClassNames = className ? ` ${className}` : "";
  const colon = isColon && ":";

  return (
    <div className={`data-item${reversedColorsClassName}${additionalClassNames}`}>
      <span className="data-item__title">
        {title}

        {colon}
      </span>

      <span className="data-item__content">{children}</span>
    </div>
  );
};
