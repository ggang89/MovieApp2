import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./router.css";

export default function Detail() {
  const[loading,setLoading]=useState(true);
  const { iddd } = useParams();
  //useParams함수 사용=>id값을 받아올 수 있다
  //router page에 쓴 변수명이랑 일치시키기
  console.log(iddd);

  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${iddd}`)
    ).json();
    //갑자기 저 주소가 어디서 나온지 모르겠다
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
    setGenres(json.data.movie.genres);
  }, [iddd]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className="movieBox">
    {loading?(
      <h2>Loading ...</h2>
    ):(
      <>
      <div className="imgBox">
      <img src={movie.large_cover_image} alt={movie.title} />
        </div>
      <div className="movieInfo">
      <h1>Title: "{movie.title}"</h1><br/>
      <p>📆Year: {movie.year}</p>
      <p>👍rate: &nbsp;{movie.rating}/10.0</p>
      <p>
        ⏳runtime:&nbsp;{movie.runtime}
        <i>min</i>
      </p>
      <ul className="genres">
        🎈genres:&nbsp;
        {genres.map((g) => (
          <li >*{g}&emsp;</li>
        ))}
      </ul>
      <h4>📌Description :</h4> 
      <p>  {movie.description_full}</p>
      </div>
    </>
     
    )}
      </div>
  );
}
