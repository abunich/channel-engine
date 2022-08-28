import { Content } from "src/models/Content";
import { OrderOverview } from "src/components/OrderOverview/OrderOverview";
import { Pagination } from "src/components/Pagination/Pagination";

export const PAGE_LIMIT = 3;

export const getFromIndex = (pageNumber: number): number => (pageNumber - 1) * PAGE_LIMIT;

export const getRequiredOverviewProps = (data: Content): OrderOverview.Props => ({
    email: data.Email,
    phone: data.Phone,
    orderDate: data.OrderDate,
    currencyCode: data.CurrencyCode,
    status: data.Status,
});

export const getTitle = (num: number): string => num > 1 ? `${num} orders` : `${num} order`;