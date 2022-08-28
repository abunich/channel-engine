import React from "react";
import { getPaginationItemValue } from "../../helpers";
import "./PaginationItem.scss";

export declare namespace PaginationItem {
  interface Props {
    value: number;
    page: number;
    pages: number;
    onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  }
}

export const PaginationItem: React.FC<PaginationItem.Props> = ({ value, page, pages, onClick }) => {
  const nextArrowValue = pages + 1;

  const getClassName = (num: number) => {
    let className = "pagination__item";

    const isFirstPage = num === 0 && page === 1;
    const isLastPage = num === nextArrowValue && page === pages;
    const shouldAddDisabled = isFirstPage || isLastPage;

    if (shouldAddDisabled) {
      className = `${className} pagination__item_disabled`;
    }

    if (num === page) {
      className = `${className} pagination__item_active`;
    }

    return className;
  };

  return (
    <li className={getClassName(value)} value={value} onClick={onClick}>
      {getPaginationItemValue(value, nextArrowValue)}
    </li>
  );
};
