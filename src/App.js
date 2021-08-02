import React from "react";

const App = ({ name }) => {
  const myList = [1, 2, 3, 4, 5];
  const listElements = myList.map((item) => <div>{item}</div>);

  return (
    <>
      <h1>Hello, {name}</h1>
      <h2>Nice to meet you.</h2>
      <h3>Take care..</h3>
      {listElements}
    </>
  );
};

export default App;
