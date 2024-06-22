import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiMovies, IMAGE_URL } from "../../api/api-movies";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await apiMovies(`${movieId}/credits`);
        setCast(data.cast);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {cast.length === 0 && (
        <p>We do not have any cast information for this movie!</p>
      )}
      <h2 className={css.title}>Cast</h2>
      <ul className={css.list}>
        {cast.map((item) => (
          <li key={item.id} className={css.item}>
            {item.profile_path !== null ? (
              <img src={`${IMAGE_URL}${item.profile_path}`} alt={item.name} />
            ) : (
              <div className={css.imgCard}>
                Not Page <p className={css.nameNotPage}>{item.name}</p>
              </div>
            )}

            <div className={css.contentBox}>
              <p className={css.name}>{item.name}</p>
              <p className={css.characterName}>Character: {item.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
