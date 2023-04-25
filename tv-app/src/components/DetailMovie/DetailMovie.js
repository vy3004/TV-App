/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./DetailMovie.css";
import data from "../../data.json";
import { Rating } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useStateProvider } from "../../utils/StateProvider";

export default function DetailMovie() {
  const [{ current_movie }] = useStateProvider();

  console.log("detail", current_movie);

  return current_movie ? (
    <div className="detail-movie-container">
      <p className="title-1">{current_movie.title.split(": ")[0]}</p>
      <p className="title-2">{current_movie.title.split(": ")[1]}</p>
      <p className="desc">{current_movie.description}</p>
      <Rating name="read-only" value={current_movie.rate} readOnly />
      <div className="detail-movie-btn">
        <button>
          <PlayArrowRoundedIcon />
          Watch Now
        </button>
        <a href="#">Trailer</a>
      </div>
    </div>
  ) : (
    <div className="detail-movie-container">
      <p className="title-1">{data[0].title.split(": ")[0]}</p>
      <p className="title-2">{data[0].title.split(": ")[1]}</p>
      <p className="desc">{data[0].description}</p>
      <Rating name="read-only" value={data[0].rate} readOnly />
      <div className="detail-movie-btn">
        <button>
          <PlayArrowRoundedIcon />
          Watch Now
        </button>
        <a href="#">Trailer</a>
      </div>
    </div>
  );
}
