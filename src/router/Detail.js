import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { iddd } = useParams();
  //useParams함수 사용=>id값을 받아올 수 있다
  //router page에 쓴 변수명이랑 일치시키기
  console.log(iddd);

  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${iddd}`)
    ).json();
    //갑자기 저 주소가 어디서 나온지 모르겠다
    console.log(json);
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
  };
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <img src={movie.large_cover_image} alt={movie.title} />
      <h1>Title: {movie.title}</h1>
      <p>📆Year: {movie.year}</p>
      <p>👍rate: &nbsp;{movie.rating}/10.0</p>
      <p>
        ⏳runtime:&nbsp;{movie.runtime}
        <i>min</i>
      </p>
      <ul>
        genres:
        {genres.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
      <p>📌Description : {movie.description_full}</p>
    </>
  );
}
