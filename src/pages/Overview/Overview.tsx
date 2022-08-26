import React from "react";
import { useOrders } from "src/hooks/useOrders";

export const Overview: React.FC = () => {
  const data = useOrders();

  console.log("data", data);
  return <div>Overview</div>;
};
