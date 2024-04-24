import { useEffect } from "react";
import {useParams} from "react-router-dom";

export default function Detail() {
  const {iddd} =useParams();
  //useParams함수 사용=>id값을 받아올 수 있다
  //router page에 쓴 변수명이랑 일치시키기
  console.log(iddd);

  const getMovie =async()=>{
    const json=await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${iddd}`)
    ).json();
    //갑자기 저 주소가 어디서 나온지 모르겠다
    console.log(json);
  }
  useEffect(()=>{
    getMovie();
  },[])
  return <h1>Detail</h1>;
}
