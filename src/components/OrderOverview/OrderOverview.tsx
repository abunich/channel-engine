import React from "react";
import { AlternateEmail as EmailIcon, Phone as PhoneIcon } from "@mui/icons-material";
import { Id, Email, Phone, OrderDate, CurrencyCode } from "src/models/Content";
import { OrderStatus } from "src/models/enums";
import { getRequiredTimeFormat } from "src/utils/helpers";
import { DataItem } from "./components/DataItem/DataItem";
import { OrderItem } from "./components/OrderItem/OrderItem";
import "./OrderOverview.scss";
import { Status } from "./components/Status/Status";

const resources = {
  orderDate: "Order date",
  currency: "Currency",
};

export declare namespace OrderOverview {
  interface Props {
    id: Id;
    email: Email;
    phone: Phone;
    orderDate: OrderDate;
    currencyCode: CurrencyCode;
    status: OrderStatus;
  }
}

export const OrderOverview: React.FC<OrderOverview.Props> = ({
  id,
  email,
  phone,
  orderDate,
  currencyCode,
  status,
}) => {
  return (
    <article className="order-overview">
      <OrderItem />

      <Status className="order-overview__status" status={status} />

      <div className="order-overview__content">
        <DataItem>
          <EmailIcon className="order-overview__icon" />

          {email}
        </DataItem>

        <DataItem>
          <PhoneIcon className="order-overview__icon" /> {phone}
        </DataItem>

        <DataItem className="order-overview__date">
          <span>{resources.orderDate}</span>

          <span>{getRequiredTimeFormat(orderDate)}</span>
        </DataItem>

        <DataItem className="order-overview__currency">
          <span>{resources.currency}:</span>

          <span>{currencyCode}</span>
        </DataItem>
      </div>
    </article>
  );
};
