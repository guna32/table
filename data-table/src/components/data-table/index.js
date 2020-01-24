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
      <tbody>
        <tr>
          {tHeaders.map(th => (
            <td key={JSON.stringify(th)}>
              <TableCell cellType="header">{th}</TableCell>
            </td>
          ))}
        </tr>
        {data.map(tr => (
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
