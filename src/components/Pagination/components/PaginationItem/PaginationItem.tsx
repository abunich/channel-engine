import React from "react";
import { getPaginationItemValue } from "../../helpers";
import "./PaginationItem.scss";

export declare namespace PaginationItem {
  interface Props {
    value: number;
    page: number;
    pages: number;
    onClick: (value: number) => void;
  }
}

export const PaginationItem: React.FC<PaginationItem.Props> = ({ value, page, pages, onClick }) => {
  const nextArrowValue = pages + 1;
  const isPrevArrowDisabled = value === 0 && page === 1;
  const isNextArrowDisabled = value === nextArrowValue && page === pages;

  const getClassName = () => {
    let className = "pagination__item";

    const shouldAddDisabled = isPrevArrowDisabled || isNextArrowDisabled;

    if (shouldAddDisabled) {
      className = `${className} pagination__item_disabled`;
    }

    if (value === page) {
      className = `${className} pagination__item_active`;
    }

    return className;
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const isNonClickableElement =
      page === e.currentTarget.value || isPrevArrowDisabled || isNextArrowDisabled;

    if (!isNonClickableElement) {
      onClick(e.currentTarget.value);
    }
  };

  return (
    <li
      className={getClassName()}
      value={value}
      data-testid={`pagination-item-${value}`}
      onClick={handleClick}
    >
      {getPaginationItemValue(value, nextArrowValue)}
    </li>
  );
};
