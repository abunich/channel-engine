import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchOrder } from "src/hooks/useFetchOrder";
import { OrderOverview } from "src/components/OrderOverview/OrderOverview";
import { OrderDetails } from "src/components/OrderDetails/OrderDetails";
import { PreviousButton } from "src/components/PreviousButton/PreviousButton";
import { OVERVIEW_URL } from "src/utils/paths";
import "./Details.scss";

const resources = {
  error: "Nothing found",
};

export const Details: React.FC = () => {
  const { id = Number.MAX_SAFE_INTEGER } = useParams();
  const data = useFetchOrder(Number(id));

  const getContent = () => {
    if (!data) {
      return <p className="details__error">{resources.error}</p>;
    }

    return (
      <div className="details__content">
        <section className="details__card">
          <OrderOverview
            className="details__overview"
            email={data.Email}
            phone={data.Phone}
            orderDate={data.OrderDate}
            currencyCode={data.CurrencyCode}
            status={data.Status}
          />
        </section>
        <section className="details__info">
          <OrderDetails data={data} />
        </section>
      </div>
    );
  };

  return (
    <div className="details">
      <Link to={OVERVIEW_URL}>
        <PreviousButton />
      </Link>

      {getContent()}
    </div>
  );
};
