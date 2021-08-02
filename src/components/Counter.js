import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleChange(event) {
    setCount(count + 1);
  }

  return (
    <div id="counter">
      <p>{count}</p>
      <button onClick={handleChange}>Click Me!</button>
    </div>
  );
};

export default Counter;
