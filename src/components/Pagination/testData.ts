import { Pagination } from "./Pagination";

export const withoutData: Pagination.Props = {
    page: 1,
    totalCount: 0,
    limit: 3,
    changePage: () => {}
}

export const firstPageData: Pagination.Props = {
    page: 1,
    totalCount: 25,
    limit: 3,
    changePage: () => {}
}

export const lastPageData: Pagination.Props = {
    page: 5,
    totalCount: 25,
    limit: 5,
    maxDisplayedPages: 5,
    changePage: () => {}
}