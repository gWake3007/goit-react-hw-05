import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const ACESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTVmM2RiZDk2OWUwZDFjNzU3MjgyOWJjNDNkZTVkNCIsInN1YiI6IjY1ZTVjM2NlYTY3MjU0MDE0OWE4YzFmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3fIsnjgr1zLa3OWcsY09BW4LEm_q-AejvLC80BOkRE";

const options = {
  headers: {
    Authorization: `Bearer ${ACESS_TOKEN}`,
  },
};

export const apiTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", options);
  console.log(data.results);
  return data.results;
};

export const apiSearchMovies = async (qwery) => {
  const { data } = await axios.get(`/search/movie?query=${qwery}`, options);
  console.log(data.results);
  return data.results;
};

export const apiMovies = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`, options);
  console.log(data.results);
  return data.results;
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
