import React, { useState } from "react";

const Table = ({ data, title }) => {
  const tHeaders = Object.keys(data[0]);
  return (
    <table>
      <tr>
        {tHeaders.map(item => (
          <td>{item}</td>
        ))}
      </tr>
    </table>
  );
};
export default Table;
