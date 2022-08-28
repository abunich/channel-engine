import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress as Loader } from "@mui/material";
import { useOrders } from "src/hooks/useOrders";
import { OrderOverview } from "src/components/OrderOverview/OrderOverview";
import { SwitchFilter } from "src/components/SwitchFilter/SwitchFilter";
import { DETAILS_URL } from "src/utils/paths";
import { Pagination } from "src/components/Pagination/Pagination";
import { PAGE_LIMIT, getFromIndex, getRequiredOverviewProps, getTitle } from "./helpers";
import "./Overview.scss";

export const Overview: React.FC = () => {
  const [isNewStatus, setIsNewStatus] = useState(false);
  const { data, isLoading } = useOrders(isNewStatus);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  useEffect(() => {
    setPageNumber(1);
  }, [isNewStatus]);

  const ordersNumber = data?.Content.length ?? 0;

  const getTitleBlock = () => {
    if (isLoading || isLoadingPage) {
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
    if (isLoading || isLoadingPage) {
      return <Loader />;
    }

    console.log("pageNumber", pageNumber);

    const getItems = () =>
      data?.Content.slice(getFromIndex(pageNumber), pageNumber * PAGE_LIMIT).map((order) => (
        <Link className="overview__link" key={order.Id} to={`${DETAILS_URL}/${order.Id}`}>
          <OrderOverview {...getRequiredOverviewProps(order)} />
        </Link>
      ));

    /** Loading imitation to display a loading process without backend */

    const changePageNumber = (page: number) => {
      setIsLoadingPage(true);
      setPageNumber(page);
      setTimeout(() => setIsLoadingPage(false), 1000);
    };

    return (
      <>
        {getItems()}

        <div className="overview__pagination">
          <Pagination
            page={pageNumber}
            limit={PAGE_LIMIT}
            totalCount={data?.TotalCount ?? 0}
            changePage={changePageNumber}
          />
        </div>
      </>
    );
  };

  return (
    <div className="overview">
      {getTitleBlock()}

      <div className="overview__content">{getContent()}</div>
    </div>
  );
};
