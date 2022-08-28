import React from "react";
import { PaginationItem } from "./components/PaginationItem/PaginationItem";
import { getArrayOfPagination, MAX_PAGINATION_ELEMENTS } from "./helpers";
import "./Pagination.scss";

export declare namespace Pagination {
  interface Props {
    page: number;
    totalCount: number;
    limit: number;
    maxDisplayedPages?: number;
    changePage: (page: number) => void;
  }
}

export const Pagination: React.FC<Pagination.Props> = ({
  page,
  totalCount,
  limit,
  maxDisplayedPages = MAX_PAGINATION_ELEMENTS,
  changePage,
}) => {
  const pages = Math.ceil(totalCount / limit);

  if (!pages) {
    return null;
  }

  const pagesButtonNumber =
    pages > 1 ? getArrayOfPagination(page, pages, maxDisplayedPages) : [pages];
  const nextArrowValue = pages + 1;

  const selectPage = (value: number) => {
    const newPage = value === 0 ? page - 1 : value === nextArrowValue ? page + 1 : value;

    changePage(newPage);
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    selectPage(e.currentTarget.value);
  };

  const paginationItems = pagesButtonNumber.map((paginationNumber) => (
    <PaginationItem
      key={paginationNumber}
      page={page}
      pages={pages}
      value={paginationNumber}
      onClick={onClick}
    />
  ));

  return <ul className="pagination">{paginationItems}</ul>;
};
