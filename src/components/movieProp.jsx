import React, { Component } from "react";
class MovieProp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <tr id="row1" className={this.props.movie.alert}>
          <th>{this.props.movie.name}</th>
          <th>{this.props.movie.id}</th>
          <th>{this.props.movie.ganre}</th>
          <th>{this.props.movie.time}</th>
          <td>
            <button className="btn btn-danger" onClick={this.props.delete}>
              delete
            </button>
            <button className="btn btn-success ms-3" onClick={this.props.patch}>
              patch
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default MovieProp;
