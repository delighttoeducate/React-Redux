import React, { Component } from "react";
import { Checkbox, Span } from "./StyledComponets";
class EachTask extends Component {
  handlerCheckbox = itemId => {
    alert(itemId);
  };

  render() {
    return (
      <>
        <Checkbox
          type="checkbox"
          onClick={() => this.handlerCheckbox(this.props.id)}
        />
        <Span taskStatus={this.props.status}>{this.props.subject}</Span>
      </>
    );
  }
}

export default EachTask;
