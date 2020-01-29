import gql from "graphql-tag";
const ProjectQuery = gql`
  {
    getProjects {
      project_name
      pr_number
      project_type
      project_status
      project_manager_name
      project_manager_email
      deployment_plan
      dormancy_capability
      rollback_capability
      project_category
      last_updated_date
    }
  }
`;
export default ProjectQuery;
