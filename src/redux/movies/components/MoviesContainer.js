import React from "react";
import { connect } from "react-redux";

const MoviesContainer = ({ movies }) => (
  <ul>
    {movies.list.map((movie) => (
      <li key={movie}>{movie}</li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, {})(MoviesContainer);
