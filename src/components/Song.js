import React from "react";

const Song = ({ name, date, imgSource }) => {
  return (
    <div className="song-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <img src={imgSource}></img>
    </div>
  );
};

export default Song;
