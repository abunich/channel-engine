import { Content } from "src/models/Content";
import { OrderOverview } from "src/components/OrderOverview/OrderOverview";

export const getRequiredOverviewProps = (data: Content): OrderOverview.Props => ({
    id: data.Id,
    email: data.Email,
    phone: data.Phone,
    orderDate: data.OrderDate,
    currencyCode: data.CurrencyCode,
    status: data.Status,
});

export const getTitle = (num: number): string => num > 1 ? `${num} orders` : `${num} order`;