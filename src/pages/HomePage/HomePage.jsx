import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { apiMovies } from "../../api/api-movies";

const HomePage = () => {
  const [trendMovie, setTrendMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await apiMovies();
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
        <ul className={css.list}>
          {trendMovie.length > 0 &&
            trendMovie.map((movie) => <li key={movie.id}>{movie.title}</li>)}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
