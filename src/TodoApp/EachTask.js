import React, { Component } from "react";
import { Checkbox, Span } from "./StyledComponets";
class EachTask extends Component {
  render() {
    return (
      <>
        <Checkbox
          type="checkbox"
          onChange={() =>
            this.props.statusChanger(
              this.props.id,
              this.props.status === "active" ? "completed" : "active"
            )
          }
          checked={this.props.checkedCheck}
        />
        <Span taskStatus={this.props.status}>{this.props.subject}</Span>
      </>
    );
  }
}

export default EachTask;
