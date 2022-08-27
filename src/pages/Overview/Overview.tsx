import React from "react";
import { useOrders } from "src/hooks/useOrders";
import { OrderOverview } from "src/components/OrderOverview/OrderOverview";
import { getRequiredOverviewProps, getTitle } from "./helpers";
import "./Overview.scss";

export const Overview: React.FC = () => {
  const { data, isLoading } = useOrders();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const getItems = () =>
    data?.Content.map((order) => (
      <OrderOverview key={order.Id} {...getRequiredOverviewProps(order)} />
    ));

  return (
    <div className="overview">
      <h2 className="overview__title">{getTitle(data?.Content.length ?? 0)}</h2>

      <div className="overview__content">{getItems()}</div>
    </div>
  );
};
