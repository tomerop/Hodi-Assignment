import React, { Component } from "react";
class Sum extends Component {
  state = {
    first: 0,
    second: 0,
    action: "",
    sumLive: 0,
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="enter number"
          onChange={(ev) => this.addFirst(ev)}
        />
        <select onChange={(ev) => this.actionValue(ev)}>
          <option value="">choose</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          placeholder="enter number"
          onChange={(ev) => this.addSecond(ev)}
        />
        <label>{this.state.sumLive}</label>
        <button type="button" onClick={this.sumThis}>
          Caculate
        </button>
      </React.Fragment>
    );
  }
  addFirst = (ev) => {
    let num = Number(ev.target.value);
    console.log(num);
    return this.setState({ first: num });
  };
  addSecond = (ev) => {
    let num = Number(ev.target.value);
    console.log(num);
    return this.setState({ second: num });
  };
  actionValue = (ev) => {
    let val = ev.target.value;
    console.log(typeof val);
    return this.setState({ action: val });
  };

  sumThis = () => {
    switch (this.state.action) {
      case "+":
        return this.setState({
          sumLive: this.state.first + this.state.second,
        });
      case "-":
        return this.setState({
          sumLive: (this.state.sumLive = this.state.first - this.state.second),
        });
      case "*":
        return this.setState({
          sumLive: (this.state.sumLive = this.state.first * this.state.second),
        });
      case "/":
        return this.setState({
          sumLive: (this.state.sumLive = this.state.first / this.state.second),
        });
    }
  };
}

export default Sum;
