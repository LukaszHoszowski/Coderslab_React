import React, {useState} from "react";
import {MOVIES_FETCH, MOVIES_FETCH_ERROR} from "../Actions";


const Search = ({dispatch}) => {
  const [movie, setMovie] = useState("");
  const [searching, setSearching] = useState(false);

  const API = "https://api.themoviedb.org/3/search/movie";

  const getMovie = e => {
    e.preventDefault();
    setSearching(true);

    const data = {
      api_key: "1f6701f4695b66698a043fb831db39e9",
      include_adult: false,
      query: movie,
      language: "pl-PL"
    };
    const urlData = new URLSearchParams(Object.entries(data));

    (async () => {
      try {
        const response = await fetch(`${API}?${urlData}`);
        if (!response.ok) {
          throw new Error("Błąd pobrania danych!");
        }

        const data = await response.json();
        if (data.results.length === 0) {
          throw new Error("Brak filmów o podanej nazwie!");
        }

        setSearching(false);
        dispatch({
          type: MOVIES_FETCH,
          payload: data.results
        });
      } catch (error) {
        dispatch({
          type: MOVIES_FETCH_ERROR,
          payload: error
        });
        setSearching(false);
      }
    })();
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form-inline mt-3" onSubmit={getMovie}>
        <input className="form-control mr-sm-2" type="search" id="movie" placeholder="Znajdź film" value={movie}
               onChange={(e) => {
                 setMovie(e.target.value);
               }}/>
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
          {searching ? (
            <>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>
              Szukam...
            </>
          ) : (
            <span>Szukaj</span>
          )}
        </button>
      </form>
    </div>
  );
};
Search.displayName = "Search";

export default Search;
