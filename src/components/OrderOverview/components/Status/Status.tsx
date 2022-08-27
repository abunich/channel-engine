import React from "react";
import { OrderStatus } from "src/models/enums";
import "./Status.scss";

const resources = {
  [OrderStatus.NEW]: "New",
  [OrderStatus.IN_PROGRESS]: "In progress",
};

export declare namespace Status {
  interface Props {
    status: OrderStatus;
    className?: string;
  }
}

export const Status: React.FC<Status.Props> = ({ status, className = "" }) => {
  return <div className={`status ${className}`}>{resources[status]}</div>;
};
