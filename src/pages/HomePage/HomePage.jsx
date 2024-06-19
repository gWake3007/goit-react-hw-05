import css from "./HomePage.module.css";

const HomePage = ({ trendMovie }) => {
  return (
    <div className={css.container}>
      <h1>Trending today</h1>
      <ul>
        {trendMovie.length > 0 &&
          trendMovie.map((movie) => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
};

export default HomePage;
