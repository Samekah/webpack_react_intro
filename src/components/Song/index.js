import React from "react";
import LikeButton from "../LikeButton";
import './style.css';

const Song = ({ name, date, imgSource }) => {
  return (
    <div className="song-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <img src={imgSource}></img>
      <LikeButton />
    </div>
  );
};

export default Song;
