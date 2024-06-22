import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiMovies } from "../../api/api-movies";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await apiMovies(`${movieId}/reviews`);
        setReviews(data.results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);
  console.log(reviews);
  return (
    <div className={css.reviews}>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      <h2 className={css.title}>Reviews</h2>
      {reviews.length === 0 && (
        <p>We do not have any reviews for this movie!</p>
      )}
      <ul className={css.list}>
        {reviews.map((item) => (
          <li className={css.item} key={item.id}>
            <h3 className={css.subTitle}>{item.author}</h3>
            <p className={css.text}>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
