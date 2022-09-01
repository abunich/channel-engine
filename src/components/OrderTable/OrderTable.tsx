import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Lines } from "src/models/Content";
import { getRequiredTimeFormat } from "src/utils/helpers";
import { Status } from "../OrderOverview/components/Status/Status";
import "./OrderTable.scss";

const titles = ["Channel No", "Descriptions", "Expected Delivery Date", "Status"];

export declare namespace OrderTable {
  interface Props {
    rows: Lines[];
    className?: string;
  }
}

export const OrderTable: React.FC<OrderTable.Props> = ({ rows, className }) => {
  const getTableHeader = () => titles.map((title) => <TableCell key={title}>{title}</TableCell>);
  const tableClassName = className ? `order-table ${className}` : "order-table";

  return (
    <TableContainer component={Paper} className={tableClassName}>
      <Table>
        <TableHead>
          <TableRow>{getTableHeader()}</TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow className="order-table__row" key={row.ChannelProductNo}>
              <TableCell className="order-table__cell">{row.ChannelProductNo}</TableCell>

              <TableCell className="order-table__cell">{row.Description}</TableCell>

              <TableCell className="order-table__cell">
                {getRequiredTimeFormat(row.ExpectedDeliveryDate)}
              </TableCell>

              <TableCell className="order-table__cell">
                <Status status={row.Status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
