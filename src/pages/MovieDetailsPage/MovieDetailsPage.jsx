import {
  useParams,
  useLocation,
  NavLink,
  Link,
  Outlet,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { apiMovies, IMAGE_URL } from "../../api/api-movies";
import { FaArrowLeft } from "react-icons/fa";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const getClassNames = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

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

  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      <Link to={backLocation.current} className={css.linkBack}>
        <FaArrowLeft />
        Go back
      </Link>

      <div className={css.filmCard}>
        <div className={css.imgBox}>
          <img src={`${IMAGE_URL}${poster_path}`} alt={title} />
        </div>
        <div>
          <h1 className={css.title}>{title}</h1>
          <p className={css.overview}>
            <strong className={css.strong}>Overview: </strong>
            {overview}
          </p>

          <ul className={css.list}>
            <li className={css.item}>
              Vote average: <span>{vote_average}</span>
            </li>
            <li className={css.item}>
              Budget: <span>{budget !== 0 ? budget : `≈1000090`}</span>
            </li>
            <li className={css.item}>
              Release date: <span>{release_date}</span>
            </li>
            <li className={css.item}>
              Time: <span>{runtime}</span> min
            </li>
          </ul>
          <strong className={css.strong}>Genres: </strong>
          <ul className={css.genresList}>
            {genres &&
              genres.map((genre) => (
                <li className={css.genre} key={genre.id}>
                  {genre.name}
                </li>
              ))}
          </ul>
          <strong className={css.strong}>Production Countries: </strong>
          <ul className={css.companyList}>
            {production_countries &&
              production_countries.map((company, index) => (
                <li className={css.company} key={company.id || index}>
                  {company.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h4 className={css.subTitle}>Additional information</h4>
        <nav className={css.nav}>
          <NavLink to="cast" state={location} className={getClassNames}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={location} className={getClassNames}>
            Reviews
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
