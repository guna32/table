import React, { useState } from "react";
import { Title, TW, TableUtilWrap } from "./style";
import { searchArray } from "../../utils/commonUtils";
import SearchBox from "../searchBox";
import RawTable from "./rawTable";

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

export default Table;
