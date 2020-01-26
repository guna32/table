import React from "react";
import "./App.css";
import Table from "./components/data-table";
import { countryDetails } from "./table-data";

function App() {
  const tableData = countryDetails;
  return (
    <div className="App">
      <div style={{ background: "gray", width: "30%" }}>
        <h1>Insert Form</h1>
      </div>
      <div style={{ background: "", width: "70%" }}>
        <h1>Data table</h1>
        <Table data={tableData.data} title={tableData.title}></Table>
      </div>
    </div>
  );
}

export default App;
