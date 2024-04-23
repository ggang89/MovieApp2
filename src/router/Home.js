import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    //movie가 아니라 movies.....
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>Movie App 2</h1>
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                img={movie.medium_cover_image}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
