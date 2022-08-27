import React from "react";
import "./DetailsBillet.scss";

const resources = {
  text: "See details",
};

export declare namespace DetailsBillet {
  interface Props {
    className?: string;
  }
}

export const DetailsBillet: React.FC<DetailsBillet.Props> = ({ className }) => {
  return <div className={`details-billet ${className}`}>{resources.text}</div>;
};
