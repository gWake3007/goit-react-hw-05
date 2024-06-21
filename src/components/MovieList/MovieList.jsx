import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className={css.list}>
      <ul className={css.list}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={String(movie.id)}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
