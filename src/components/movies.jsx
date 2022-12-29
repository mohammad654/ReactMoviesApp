import React, { Component } from "react";
import { getMovies } from "../movies/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";

class Movie extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
  };
  handelDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
    // console.log(this.state.movies[1].like);
  };
  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    const { length: alias } = this.state.movies;
    if (alias === 0) return <p>There are no movies in database!</p>;
    return (
      <div className="">
        <h4>Movies in database {alias}</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate </th>
              <th />
              <th />
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
                  <Like
                    liked={movie.like}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
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
