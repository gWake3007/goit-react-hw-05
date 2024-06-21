import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={css.list}>
      <ul className={css.list}>
        {movies.length > 0 &&
          movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
};

export default MovieList;
