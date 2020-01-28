import React from "react";
import "./App.css";
import Table from "./components/data-table";
import { countryDetails } from "./table-data";
import CanvasLabs from "./components/canvasLabs";

function App() {
  const tableData = countryDetails;
  return (
    <div className="App">
      <CanvasLabs style={{ width: "15%" }}></CanvasLabs>
      <div style={{ background: "", width: "100%" }}>
        <h1>Data table</h1>
        <Table data={tableData.data} title={tableData.title}></Table>
      </div>
    </div>
  );
}

export default App;
