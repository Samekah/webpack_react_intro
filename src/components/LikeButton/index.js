import React, { useState } from "react";
import './style.css';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "red",
  });
  const [buttonContent, setButtonContent] = useState("Like");

  function toggleLike() {
    if (isLiked) {
      setIsLiked(false);
      setButtonStyle({
        backgroundColor: "red",
      });
      setButtonContent("Like");
    } else {
      setIsLiked(true);
      setButtonStyle({
        backgroundColor: "green",
      });
      setButtonContent("Unlike");
    }
  }

  return (
    <button style={buttonStyle} onClick={toggleLike} className='like-button'>
      {buttonContent}
    </button>
  );
};

export default LikeButton;
