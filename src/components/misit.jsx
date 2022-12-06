import React, { Component } from "react";
class Misit extends Component {
  state = {
  };
  render() {
    return (
      <div>
        <form>
          <div className="mb-3 ms-3">
            <label className="form-label">
              First Name
            </label>
            <input id="e"
              type="txt"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3 ms-3">
            <label className="form-label">
              Last Name
            </label>
            <input id="d"
              type="txt"
              className="form-control"
              placeholder="Enter LastName"
            />
          </div>
          <div className="mb-3 ms-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
            />
            <label className="form-check-label">
              Check me out
            </label>
          </div>
          <button className="btn btn-primary ms-3" onClick={this.alertTo}>
            Greet Me
          </button>
        </form>
      </div>
    );
  }
  alertTo=()=>{
    alert('Hello '+document.getElementById('e').value+' '+document.getElementById('d').value+'!')
  }
}

export default Misit;
