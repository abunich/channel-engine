/**
 *  @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { toMatchSnapshot } from "src/utils/tests";
import { Pagination } from "./Pagination";
import { withoutData, firstPageData, lastPageData } from "./testData";

const activeClass = "pagination__item pagination__item_active";
const disabledClass = "pagination__item pagination__item_disabled";

describe("<Pagination />", () => {
  it("Render Pagination with no data", () => {
    toMatchSnapshot(<Pagination {...withoutData} />);
  });

  it("Render Pagination with active first page", () => {
    const changePage = jest.fn();

    render(<Pagination {...firstPageData} changePage={changePage} />);

    const firstButton = screen.queryByTestId("pagination-item-1");

    expect(firstButton?.className).toBe(activeClass);

    firstButton?.click();

    expect(changePage).toBeCalledTimes(0);

    const prevButton = screen.queryByTestId("pagination-item-0");

    expect(prevButton?.className).toBe(disabledClass);

    prevButton?.click();

    expect(changePage).toBeCalledTimes(0);

    const secondButton = screen.queryByTestId("pagination-item-2");

    secondButton?.click();

    expect(changePage).toBeCalledTimes(1);

    toMatchSnapshot(<Pagination {...firstPageData} />);
  });

  it("Render Pagination with active last page", () => {
    const changePage = jest.fn();

    render(<Pagination {...lastPageData} changePage={changePage} />);

    const lastButton = screen.queryByTestId("pagination-item-5");

    expect(lastButton?.className).toBe(activeClass);

    lastButton?.click();

    expect(changePage).toBeCalledTimes(0);

    const nextButton = screen.queryByTestId("pagination-item-6");

    expect(nextButton?.className).toBe(disabledClass);

    nextButton?.click();

    expect(changePage).toBeCalledTimes(0);

    const preLastButton = screen.queryByTestId("pagination-item-4");

    preLastButton?.click();

    expect(changePage).toBeCalledTimes(1);

    toMatchSnapshot(<Pagination {...lastPageData} />);
  });
});
