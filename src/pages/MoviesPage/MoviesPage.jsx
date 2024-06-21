import css from "./MoviesPage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { apiSearchMovies } from "../../api/api-movies";

const MoviesPage = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notResults, setNotResults] = useState(false);

  const [params, setParams] = useSearchParams();

  const handleSearch = useCallback(
    (qwery) => {
      setParams({ qwery });
      const getData = async () => {
        try {
          setLoading(true);
          const data = await apiSearchMovies(qwery);
          if (data.length === 0) {
            setNotResults(true);
          } else {
            setMovie(data);
          }
        } catch (err) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      getData();
    },
    [setParams]
  );

  useEffect(() => {
    const qwery = params.get("qwery");

    if (qwery) {
      handleSearch(qwery);
    }
  }, [handleSearch, params]);

  return (
    <div className={css.container}>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {notResults ? <p>Not Results!!!</p> : <MovieList movies={movie} />}
    </div>
  );
};

export default MoviesPage;
