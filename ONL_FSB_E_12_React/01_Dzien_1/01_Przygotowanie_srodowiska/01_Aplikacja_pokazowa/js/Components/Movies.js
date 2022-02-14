import React from "react";
import SingleMovie from "./SingleMovie";


const Movies = ({movies}) => {
  return (
    <div className="py-5 mb-5 bg-light">
      <div className="container">
        <div className="row">
          {movies.map(movie => <SingleMovie movie={movie} key={movie.id}/>)}
        </div>
      </div>
    </div>
  );
};
Movies.displayName = "Movies";

export default Movies;

