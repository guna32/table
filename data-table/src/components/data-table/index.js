import React, { useState, useEffect } from "react";
import { TableCell, Title, TW, TableHeaderWrap } from "./style";
import { sortObject } from "../../utils/commonUtils";

const Table = ({ data, title }) => {
  return (
    <TW>
      <Title>{title}</Title>
      <RawTable data={data}></RawTable>
    </TW>
  );
};

const RawTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [count, setCount] = useState(0);
  const tHeaders = Object.keys(tableData[0]); //fetch headers

  const handleSort = key => {
    setCount(count + 1);
    setTableData(sortObject("ASC", key, tableData));
  };
  //update table on sort
  useEffect(() => {}, [count]);

  return (
    <table>
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
        {tableData.map(tr => (
          <tr key={JSON.stringify(tr)}>
            {tHeaders.map(th => (
              <td key={JSON.stringify(th)}>
                <TableCell>{tr[th]}</TableCell>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
