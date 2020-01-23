import React, { useState } from "react";
import { TableCell, Title, TW } from "./style";

const Table = ({ data, title }) => {
  return (
    <TW>
      <Title>{title}</Title>
      <RawTable data={data}></RawTable>
    </TW>
  );
};

const RawTable = ({ data }) => {
  const tHeaders = Object.keys(data[0]);
  return (
    <table>
      <tr>
        {tHeaders.map(th => (
          <td>
            <TableCell cellType="header">{th}</TableCell>
          </td>
        ))}
      </tr>
      {data.map(tr => (
        <tr key={JSON.stringify(tr)}>
          {tHeaders.map(th => (
            <td>
              <TableCell key={JSON.stringify(th)}>{tr[th]}</TableCell>
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
export default Table;
