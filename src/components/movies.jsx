import React, { Component } from "react";
import { getMovies } from "../Service/MoviesService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Id</th>
            <th>Genre</th>
            <th>Length</th>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr>
                <td>{movie.name}</td>
                <td>{movie.id}</td>
                <td>{movie.genre}</td>
                <td>{movie.length}</td>
                <td>
                  <button
                    id={movie.id}
                    className="btn btn-danger"
                    onClick={() => this.removeItem(movie.id)}
                    //   onClick={(e) =>
                    //     (this.state.movies = this.setState({
                    //       movies: deleteMovie(e),
                    //     }))
                    //   }
                  >
                    delete
                  </button>
                  <button
                    id={movie.index}
                    className="btn btn-success ms-3"
                    onClick={() => this.pacthItem(movie.id)}
                  >
                    patch
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  removeItem = (id) => {
    this.state.movies = this.state.movies.filter((movie) => movie.id !== id);
    this.setState({ movies: this.state.movies });
  };
  pacthItem = (id) => {
    this.state.movies = this.state.movies.map((movie) => {
      if (id === movie.id) movie.name = "null";
      return movie;
    });
    this.setState({ movies: this.state.movies });
  };
}

export default Movies;
