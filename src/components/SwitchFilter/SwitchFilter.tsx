import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import "./SwitchFilter.scss";

const label = "NEW ORDERS";

export declare namespace SwitchFilter {
  interface Props {
    status: boolean;
    setStatus: Dispatch<SetStateAction<boolean>>;
  }
}

export const SwitchFilter: React.FC<SwitchFilter.Props> = ({ status, setStatus }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        className="switch-label"
        control={<Switch className="switch-filter" checked={status} onChange={onChange} />}
        label={label}
      />
    </FormGroup>
  );
};
