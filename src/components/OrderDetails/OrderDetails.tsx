import React from "react";
import { Content } from "src/models/Content";
import { OrderTable } from "../OrderTable/OrderTable";
import { Address } from "./components/Address/Address";
import { Tarp } from "./components/Tarp/Tarp";
import "./OrderDetails.scss";

const resources = {
  title: "Order information",
  shippingAddress: "Shipping Address",
  billingAddress: "Billing Address",
};

export declare namespace OrderDetails {
  interface Props {
    data: Content;
  }
}

export const OrderDetails: React.FC<OrderDetails.Props> = ({ data }) => {
  return (
    <Tarp className="order-details">
      <h2 className="order-details__title">{resources.title}</h2>

      <OrderTable className="order-details__table" rows={data.Lines} />

      <div className="order-details__addresses">
        <Address data={data.ShippingAddress} title={resources.shippingAddress} />

        <Address data={data.BillingAddress} title={resources.billingAddress} />
      </div>
    </Tarp>
  );
};
