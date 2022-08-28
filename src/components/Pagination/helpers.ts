export const PREV_VALUE = "<";
export const NEXT_VALUE = ">";
export const MAX_PAGINATION_ELEMENTS = 3;

export const getPaginationItemValue = (num: number, nextArrowValue: number) =>
  num === 0 ? PREV_VALUE : num === nextArrowValue ? NEXT_VALUE : num;

const getFirstElement = (page: number, pages: number, numberElements: number) => {
  const gap = Math.ceil(numberElements / 2 - 1);

  const isRightGapMoreThanPages = page + gap > pages;
  if (isRightGapMoreThanPages) {
    const result = pages - numberElements;
    return result > 0 ? result + 1 : 0;
  }

  const isLeftGapLessThanFirstPage = page - gap < 1;
  if (isLeftGapLessThanFirstPage) {
    return 1;
  }

  return page - gap;
};

export const getArrayOfPagination = (page: number, pages: number, limit: number): number[] => {
  const [numberElements, firstElement] = pages > limit ? [limit, getFirstElement(page, pages, limit)] : [pages, 1];

  const array = new Array(numberElements).fill(0).map((_, index) => {
    return firstElement + index;
  });

  return [0, ...array, pages + 1];
};
