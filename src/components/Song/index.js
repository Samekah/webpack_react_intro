import React, {useState} from "react";
import LikeButton from "../LikeButton";
import CommentForm from '../CommentForm';
import './style.css';

const Song = ({ name, date, imgSource }) => {
  const [comment, setComment] = useState("");

  function handleCommentSubmit(event){
    event.preventDefault();
    setComment(event.target.comment.value);
  }

  return (
    <div className="song-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <img src={imgSource}></img>
      <LikeButton />
      <CommentForm handleCommentSubmit={handleCommentSubmit}/>
      <p>{comment}</p>
    </div>
  );
};

export default Song;
