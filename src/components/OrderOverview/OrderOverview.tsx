import React from "react";
import { AlternateEmail as EmailIcon, Phone as PhoneIcon } from "@mui/icons-material";
import { Email, Phone, OrderDate, CurrencyCode } from "src/models/Content";
import { OrderStatus } from "src/models/enums";
import { getRequiredTimeFormat } from "src/utils/helpers";
import { DataItem } from "../DataItem/DataItem";
import { OrderItem } from "./components/OrderItem/OrderItem";
import "./OrderOverview.scss";
import { Status } from "./components/Status/Status";

const resources = {
  orderDate: "Order date",
  currency: "Currency",
};

export declare namespace OrderOverview {
  interface Props {
    email: Email;
    phone: Phone;
    orderDate: OrderDate;
    currencyCode: CurrencyCode;
    status: OrderStatus;
    className?: string;
    isBillet?: boolean;
  }
}

export const OrderOverview: React.FC<OrderOverview.Props> = ({
  email,
  phone,
  orderDate,
  currencyCode,
  status,
  className = "",
  isBillet,
}) => {
  return (
    <article className={`order-overview ${className}`}>
      <OrderItem isBillet={isBillet} />

      <Status className="order-overview__status" status={status} />

      <div className="order-overview__content">
        <DataItem title={<EmailIcon />}>{email}</DataItem>

        <DataItem title={<PhoneIcon />}>{phone}</DataItem>

        <DataItem title={resources.orderDate} className="order-overview__date" isReversedColors>
          {getRequiredTimeFormat(orderDate)}
        </DataItem>

        <DataItem
          title={resources.currency}
          className="order-overview__currency"
          isColon
          isReversedColors
        >
          {currencyCode}
        </DataItem>
      </div>
    </article>
  );
};
