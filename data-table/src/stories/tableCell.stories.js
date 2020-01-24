import React from "react";
import { TableCell } from "../components/data-table/style";

export default {
  title: "TableCell",
  component: TableCell
};

export const normalCell = () => <TableCell>ordinary cell</TableCell>;

export const headerCell = () => (
  <TableCell cellType="header">header cell</TableCell>
);
