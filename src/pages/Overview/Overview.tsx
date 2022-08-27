import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress as Loader } from "@mui/material";
import { useOrders } from "src/hooks/useOrders";
import { OrderOverview } from "src/components/OrderOverview/OrderOverview";
import { SwitchFilter } from "src/components/SwitchFilter/SwitchFilter";
import { getRequiredOverviewProps, getTitle } from "./helpers";
import { DETAILS_URL } from "src/utils/paths";
import "./Overview.scss";

export const Overview: React.FC = () => {
  const [isNewStatus, setIsNewStatus] = useState(false);
  const { data, isLoading } = useOrders(isNewStatus);

  const ordersNumber = data?.Content.length ?? 0;

  const getTitleBlock = () => {
    if (isLoading) {
      return null;
    }

    const title = ordersNumber > 0 && <h2 className="overview__title">{getTitle(ordersNumber)}</h2>;

    return (
      <div className="overview__top-bar">
        {title}

        <SwitchFilter status={isNewStatus} setStatus={setIsNewStatus} />
      </div>
    );
  };

  const getContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    const getItems = () =>
      data?.Content.map((order) => (
        <Link className="overview__link" key={order.Id} to={`${DETAILS_URL}/${order.Id}`}>
          <OrderOverview {...getRequiredOverviewProps(order)} />
        </Link>
      ));

    return getItems();
  };

  return (
    <div className="overview">
      {getTitleBlock()}

      <div className="overview__content">{getContent()}</div>
    </div>
  );
};
