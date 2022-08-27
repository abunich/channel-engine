import React from "react";
import { useFetchOrder } from "src/hooks/useFetchOrder";
import { useParams } from "react-router-dom";
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

    return <p>Details</p>;
  };

  console.log("data", data);

  return <div className="details">{getContent()}</div>;
};
