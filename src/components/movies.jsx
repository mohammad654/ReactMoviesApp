import React, { Component } from "react";
import { getMovies } from "../movies/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies(),
  };
  handelDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
    //console.log('Id',movies);
  };
  render() {
    const { length: alias } = this.state.movies;
    if (alias === 0) return <p>There are no movies in database!</p>;
    return (
      <div className="">
        <h1>Movie in database {alias}</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie._id}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handelDelete(movie)}
                    className="btn btn-danger px-2"
                  >
                    <i className="fa fa-trash text-"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movie;
