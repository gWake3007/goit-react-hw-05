import { useParams, useLocation, NavLink, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { apiMovies, IMAGE_URL } from "../../api/api-movies";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLocation = useRef(location.state ?? "/products");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState({
    poster_path: "",
    title: "",
    overview: "",
    budget: 0,
    vote_average: 0,
    runtime: 0,
    release_date: "",
    genres: [],
    production_countries: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await apiMovies(movieId);
        setMovie(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const {
    poster_path,
    title,
    overview,
    budget,
    vote_average,
    runtime,
    release_date,
    genres,
    production_countries,
  } = movie;
  console.log(movie);

  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      <Link to={backLocation.current}>Go back</Link>
      <div className={css.filmCard}>
        <div className={css.imgBox}>
          <img src={`${IMAGE_URL}${poster_path}`} alt={title} />
        </div>
        <div>
          <h1 className={css.title}>{title}</h1>
          <p>
            <strong>Overview: </strong>
            {overview}
          </p>
          <ul className={css.list}>
            <li className={css.item}>
              Vote average:
              <span>{vote_average}</span>
            </li>
            <li className={css.item}>
              Budget:
              <span>{budget}</span>
            </li>
            <li className={css.item}>
              Release date:
              <span>{release_date}</span>
            </li>
            <li className={css.item}>
              <span>{runtime}</span>
            </li>
          </ul>
          <ul className={css.genresList}>
            {genres &&
              genres.map((genre) => (
                <li className={css.genre} key={genre.id}>
                  {genre.name}
                </li>
              ))}
          </ul>
          <ul className={css.companyList}>
            {production_countries &&
              production_countries.map((company) => (
                <li className={css.company} key={company.id}>
                  {company.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <NavLink to="cast" state={location}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
