import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { apiTrendingMovies } from "../../api/api-movies";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendMovie, setTrendMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await apiTrendingMovies();
        setTrendMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Trending today</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error!!!</p>}
        <MovieList movies={trendMovie} />
      </div>
    </>
  );
};

export default HomePage;
