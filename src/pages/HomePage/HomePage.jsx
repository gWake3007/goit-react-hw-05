import css from "./HomePage.module.css";
import Navigation from "../../components/Navigation/Navigation";

const HomePage = ({ trendMovie }) => {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <h1>Trending today</h1>
        <ul>
          {trendMovie.length > 0 &&
            trendMovie.map((movie) => <li key={movie.id}>{movie.title}</li>)}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
