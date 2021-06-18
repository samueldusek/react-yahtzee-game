import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let dieClass = `Die bi bi-dice-${this.props.val}-fill ${
      this.props.locked ? "Die-locked" : ""
    } ${this.props.isRolling && !this.props.locked ? "Die-rolling" : ""}`;
    return <i className={dieClass} onClick={this.handleClick}></i>;
  }
}

export default Die;
