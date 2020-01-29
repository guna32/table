import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.link.pr_number} ({this.props.link.project_status})
        </div>
      </div>
    );
  }
}

export default Link;
