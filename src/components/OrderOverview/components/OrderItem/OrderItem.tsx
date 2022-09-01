import React from "react";
import { ShoppingCartOutlined as OrderIcon } from "@mui/icons-material";
import { DetailsBillet } from "../DetailsBillet/DetailsBillet";
import "./OrderItem.scss";

export declare namespace OrderItem {
  interface Props {
    isBillet?: boolean;
  }
}

export const OrderItem: React.FC<OrderItem.Props> = ({ isBillet = false }) => {
  const detailsBillet = isBillet && <DetailsBillet className="order-item__billet" />;

  return (
    <div className="order-item">
      <OrderIcon className="order-item__icon" />

      {detailsBillet}
    </div>
  );
};
