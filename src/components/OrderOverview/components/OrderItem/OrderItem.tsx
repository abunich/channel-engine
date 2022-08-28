import React from "react";
import { ShoppingCartOutlined as OrderIcon } from "@mui/icons-material";
import { DetailsBillet } from "../DetailsBillet/DetailsBillet";
import "./OrderItem.scss";

export const OrderItem: React.FC = () => {
  return (
    <div className="order-item">
      <OrderIcon className="order-item__icon" />

      <DetailsBillet className="order-item__billet" />
    </div>
  );
};
