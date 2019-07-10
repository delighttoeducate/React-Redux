import React, { Component } from "react";
import { Checkbox, Span } from "./StyledComponets";
class EachTask extends Component {
    
    render() {
        const {checkedCheck,id,status,statusChanger,subject}=this.props
    return (
      <>
        <Checkbox
          type="checkbox"
          onChange={() =>
            statusChanger(
              id,
              status === "active" ? "completed" : "active"
            )
          }
          checked={checkedCheck}
        />
        <Span taskStatus={status}>{subject}</Span>
      </>
    );
  }
}

export default EachTask;
