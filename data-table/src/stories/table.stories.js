import React from "react";
import RawTable from "../components/data-table/rawTable";

export default {
  title: "RawTable",
  component: RawTable
};
const data = [
  {
    name: "lorem",
    address: "ipsum"
  },
  {
    name: "dolor",
    address: "sit"
  }
];
export const emptyTable = () => <RawTable data={[]}></RawTable>;
export const nonEmptyTable = () => <RawTable data={data}></RawTable>;
