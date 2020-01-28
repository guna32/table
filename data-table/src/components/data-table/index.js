import React, { useState, useEffect } from "react";
import { TableCell, Title, TW, TableHeaderWrap, TableUtilWrap } from "./style";
import { sortObject, searchArray } from "../../utils/commonUtils";
import SearchBox from "../searchBox";
const Table = ({ data, title }) => {
  const [tableData, setTableData] = useState(data);

  return (
    <TW>
      <TableUtilWrap>
        <Title>{title}</Title>
        <SearchBox
          searchCallback={e => setTableData(searchArray(e.target.value, data))}
        ></SearchBox>
      </TableUtilWrap>
      <RawTable data={tableData}></RawTable>
    </TW>
  );
};

const RawTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [count, setCount] = useState(0);
  const tHeaders = tableData.length > 0 ? Object.keys(tableData[0]) : []; //fetch headers

  const handleSort = key => {
    setCount(count + 1);
    setTableData(sortObject("ASC", key, tableData));
  };
  //update table on sort,data change
  useEffect(() => {
    setTableData(data);
  }, [count, data.length, data]);

  //when no data
  if (tableData.length <= 0) {
    return <p>No record found</p>;
  }
  return (
    <table cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          {tHeaders.map(th => (
            <td key={JSON.stringify(th)}>
              <TableHeaderWrap>
                <TableCell cellType="header">{th}</TableCell>
                <button
                  style={{ height: "60%" }}
                  onClick={() => handleSort(th)}
                >
                  sort
                </button>
              </TableHeaderWrap>
            </td>
          ))}
        </tr>
        {tableData.map((tr, i) => (
          <tr key={JSON.stringify(tr)}>
            {tHeaders.map(th => (
              <td key={JSON.stringify(th)}>
                <TableCell theme={i % 2 === 0 ? "#DEEBF7" : ""}>
                  {tr[th]}
                </TableCell>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
