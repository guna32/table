import React, { useState, useEffect } from "react";
import { sortObject } from "../../utils/commonUtils";
import SortComponent from "../sortComponent";

import { TableCell, TableHeaderWrap, RTW, RawTableWrap } from "./style";

const RawTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [count, setCount] = useState(0);
  const tHeaders = tableData.length > 0 ? Object.keys(tableData[0]) : []; //fetch headers

  const handleSort = key => {
    setCount(count + 1);
    let order = count % 2 === 0 ? "ASC" : "DSC";
    setTableData(sortObject(order, key, tableData));
  };
  //update table on sort,data change
  useEffect(() => {
    setTableData(data);
  }, [data.length, data]);

  //when no data
  if (tableData.length <= 0) {
    return (
      <RTW>
        <p>No records found</p>
      </RTW>
    );
  }

  return (
    <RawTableWrap>
      <table cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            {tHeaders.map(th => (
              <td key={JSON.stringify(th)}>
                <TableHeaderWrap>
                  <TableCell cellType="header">{th}</TableCell>
                  <SortComponent onClick={() => handleSort(th)} />
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
    </RawTableWrap>
  );
};
export default RawTable;
