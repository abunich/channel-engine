import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import "./PreviousButton.scss";

export const PreviousButton: React.FC<IconButtonProps> = (props) => {
  return (
    <IconButton className="previous-button" {...props}>
      <ArrowBack />
    </IconButton>
  );
};
