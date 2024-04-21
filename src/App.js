import { useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setLoading(false);
    setMovies(json.data.movies);
  };

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>Movie App 2</h1>
          <Movie />
        </div>
      )}
      
    </div>
  );
}

export default App;
