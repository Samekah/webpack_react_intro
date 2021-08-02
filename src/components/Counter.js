import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //dont change state directly , use a function, as below.
  return (
    <div id="counter">
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment!</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement!</button>
    </div>
  );
};

export default Counter;
