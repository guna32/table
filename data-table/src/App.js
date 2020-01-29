import React from "react";
import "./App.css";
import Table from "./components/data-table";
// import { countryDetails } from "./table-data";
// import CanvasLabs from "./components/canvasLabs";
// import LinkList from "./components/LinkList";
import { Query } from "react-apollo";
import ProjectQuery from "./__queries__/projectQuery";

function App() {
  // const tableData = countryDetails;
  return (
    <Query query={ProjectQuery}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;
        return (
          <div className="App">
            <div style={{ background: "#5e9cd3", width: "15%" }}></div>
            <div style={{ background: "", width: "100%" }}>
              <h1>Data table</h1>
              <Table
                data={data ? data.getProjects : []}
                title={"Project Table"}
              ></Table>
            </div>
          </div>
        );
      }}
    </Query>
  );
}

export default App;
