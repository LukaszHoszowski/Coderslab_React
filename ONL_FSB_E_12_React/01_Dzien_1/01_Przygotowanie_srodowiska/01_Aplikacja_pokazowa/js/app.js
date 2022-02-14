import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MOVIES_FETCH, MOVIES_FETCH_ERROR } from "./Actions";
import Navigation from "./Components/Navigation";
import Search from "./Components/Search";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const dispatch = (action) => {
    switch (action.type) {
      case MOVIES_FETCH: {
        setMovies(action.payload);
        setError(false);
        break;
      }

      case MOVIES_FETCH_ERROR: {
        setMovies([]);
        setError(action.payload);
        break;
      }

      default:
        console.warn("You should specify action type.");
    }
  };

  return (
    <>
      <Navigation />

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Twoja baza filmów</h1>
          <p className="lead">
            Wyszukuj swoje ulubione filmy. Dane dostarcza{" "}
            <a href="https://www.themoviedb.org" target="_blank">
              The Movie DB
            </a>
            .
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md text-center">
            <h3 className="lead">Znajdź swój ulubiony film!</h3>
            <Search dispatch={dispatch} />
          </div>
        </div>
      </div>

      {error !== false && (
        <div className="col-md text-center">
          <h3>{error.message}</h3>
        </div>
      )}
      {movies.length === 0 ? null : <Movies movies={movies} />}
      <Footer />
    </>
  );
};
App.displayName = "App";

ReactDOM.render(<App />, document.getElementById("app"));
