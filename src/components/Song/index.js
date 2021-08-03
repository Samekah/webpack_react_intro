import React from "react";
import LikeButton from "../LikeButton";

const Song = ({ name, date, imgSource }) => {
  return (
    <div className="song-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <LikeButton />
      <img src={imgSource}></img>
    </div>
  );
};

export default Song;
