import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTVmM2RiZDk2OWUwZDFjNzU3MjgyOWJjNDNkZTVkNCIsInN1YiI6IjY1ZTVjM2NlYTY3MjU0MDE0OWE4YzFmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3fIsnjgr1zLa3OWcsY09BW4LEm_q-AejvLC80BOkRE",
  },
};

export const apiMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", options);
  console.log(data.results);
  return data.results;
};
