import { useEffect, useState } from "react";
import { apiMovies } from "./api/api-movies.js";
import HomePage from "./pages/HomePage/HomePage.jsx";
import "./App.css";

function App() {
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
      <HomePage trendMovie={trendMovie} />
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
    </>
  );
}

export default App;
