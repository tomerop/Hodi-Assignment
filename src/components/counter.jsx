import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    plusBtn: "btn btn-dark",
    plusBtnZero: "btn btn-warning",
    names: [],
  };
  style = {
    fontSize: 100,
    fontWieght: "bold",
  };
  // constructor(){
  //     super();
  //     this.handleIncreament=this.handleIncreament.bind(this);
  // }
  render() {
    return (
      <div>
        <div className="m-3">
          <h1 style={this.style} className={this.changeBg()}>
            {this.formatCount()}
          </h1>
          <div>
            <button
              onClick={this.handleIncreament}
              className={this.btnColor("+")}
            >
              +
            </button>
            <button
              onClick={this.handleMinIncreament}
              className={this.btnColor("-")}
            >
              -
            </button>
          </div>
          {this.state.names.length === 0 && (
            <h1 className="badge bg-warning">enter info</h1>
          )}
          <ul className={this.changeBg()}>
            {this.state.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleMinIncreament = () => {
    this.state.count > 0
      ? this.setState({ count: this.state.count - 1 })
      : console.log();
  };
  btnColor(name) {
    return (
      "btn btn-" +
      (this.state.count === 0 && name.includes("+")
        ? "danger"
        : this.state.count === 0 && name.includes("-")
        ? "success"
        : !(this.state.count === 0) && name.includes("-")
        ? "danger"
        : "success")
    );
  }

  changeBg() {
    return "badge m-2 bg-" + (this.state.count === 0 ? "warning" : "success");
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
  plusBtnColor() {
    return this.state.count === 0 ? "btn btn-warning" : "btn btn-dark";
  }
  minusBtnColor() {
    return this.state.count === 0 ? "btn btn-dark" : "btn btn-warning";
  }
}

export default Counter;
