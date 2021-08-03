import React, { useState } from "react";

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
    <button style={buttonStyle} onClick={toggleLike}>
      {buttonContent}
    </button>
  );
};

export default LikeButton;
