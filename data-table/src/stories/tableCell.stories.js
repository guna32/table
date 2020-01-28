import React from "react";
import { TableCell } from "../components/data-table/style";
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "TableCell",
  decorators: [withKnobs],
  component: TableCell
};
const cellType = { Header: "header", Ordinary: "ordinary" };
const theme = { blue: "#DEEBF7", white: "", gray: "lightgray" };

export const simpleCell = () => (
  <TableCell
    cellType={select("Cell Type", cellType, "ordinary")}
    theme={select("Theme", theme, "white")}
  >
    render anything
  </TableCell>
);
