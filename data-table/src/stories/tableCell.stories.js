import React from "react";
import { TableCell } from "../components/data-table/style";
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "TableCell",
  decorators: [withKnobs],
  component: TableCell
};
const cellType = { Header: "header", Ordinary: "ordinary" };

export const simpleCell = () => (
  <TableCell cellType={select("Cell Type", cellType, "ordinary")}>
    render anything
  </TableCell>
);
