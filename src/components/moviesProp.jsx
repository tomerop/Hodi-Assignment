import React, { Component } from "react";
import MovieProp from "./movieProp";
class MoviesProp extends Component {
  state = {
    arr: [
      {
        name: "Shrek",
        id: 1,
        ganre: "scifi",
        time: "2:20",
        alert: "alert alert-primary",
        newName: "",
      },
      {
        name: "adam project",
        id: 2,
        ganre: "scifi",
        time: "1:50",
        alert: "alert alert-danger",
        newName: "",
      },
      {
        name: "titanic",
        id: 3,
        ganre: "scifi",
        time: "2:30",
        alert: "alert alert-success",
        newName: "",
      },
      {
        name: "fast 5",
        id: 4,
        ganre: "scifi",
        time: "2:20",
        alert: "alert alert-dark",
        newName: "",
      },
      {
        name: "taken",
        id: 5,
        ganre: "action",
        time: "2:20",
        alert: "alert alert-warning",
        newName: "",
      },
    ],
  };
  removeItem = (id) => {
    const arr = this.state.arr.filter((movie) => movie.id !== id);
    this.setState({ arr });
  };
  pacthItem = (id) => {
    const arr = this.state.arr.map((movie) => {
      if (id === movie.id) movie.name = "null";
      return movie;
    });
    this.setState({ arr });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Id</td>
              <td>Genre</td>
              <td>Length</td>
            </tr>
          </thead>
          <tbody>
            {this.state.arr.map((value) => {
              return (
                <MovieProp
                  movie={value}
                  key={value.id}
                  delete={() => this.removeItem(value.id)}
                  patch={() => this.pacthItem(value.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesProp;
