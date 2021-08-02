import React from "react";
import Intro from "./components/Intro";
import Song from "./components/Song";
import Counter from "./components/Counter";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Intro />
      <Song
        name="A Curious Tale of Trials + Persons"
        date="2015"
        imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Little_Simz%2C_Seat_Village_stage_5.jpg/220px-Little_Simz%2C_Seat_Village_stage_5.jpg"
      />
      <Song
        name="Stillness in Wonderland"
        date="2016"
        imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Little_Simz_Performing.jpg/220px-Little_Simz_Performing.jpg"
      />
      <Song name="Grey Area " date="2019" imgSource="" />
      <Song name="Sometimes I Might Be Introvert" date="2021" imgSource="" />
      <Counter />
      <Form />
    </>
  );
};

export default App;
