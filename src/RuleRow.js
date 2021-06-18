import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    let info;
    let scored = false;
    if (Number.isInteger(this.props.score)) {
      scored = true;
      info = <td className="RuleRow-score">{this.props.score}</td>;
    } else {
      info = <td className="RuleRow-score">{this.props.des}</td>;
    }
    return (
      <tr
        className={`RuleRow ${scored ? "RuleRow-disabled" : "RuleRow-active"}`}
        onClick={this.props.doScore}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        {info}
      </tr>
    );
  }
}

export default RuleRow;
