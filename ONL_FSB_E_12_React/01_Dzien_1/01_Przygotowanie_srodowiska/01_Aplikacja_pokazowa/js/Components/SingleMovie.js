import React from "react";

const SingleMovie = ({movie}) => {
  if (movie.poster_path === null) return null;

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="bd-placeholder-img card-img-top"/>
        <div className="card-body">
          <h4>{movie.title}</h4>
          <p className="card-text">{movie.overview} </p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{movie.vote_average}/10</small>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleMovie.displayName = "SingleMovie";

export default SingleMovie;
