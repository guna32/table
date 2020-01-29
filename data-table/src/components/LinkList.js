import React, { Component } from "react";
import Link from "./Link";
import gql from "graphql-tag";
import { Query } from "react-apollo";
const ProjectQuery = gql`
  {
    getProjects {
      project_name
      pr_number
      project_type
      project_status
    }
  }
`;

class LinkList extends Component {
  render() {
    return (
      <Query query={ProjectQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const linksToRender = data.getProjects;

          return (
            <div>
              {linksToRender.map(link => (
                <Link key={link} link={link} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;
