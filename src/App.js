import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Landing } from './pages';

const App = () => {
  return (
    <Switch>
      <Route path='/Little_Simz'>
        <Landing/>
      </Route>
      <Route exact path='/' render={()=><h1>Welcome to our react app!</h1>}></Route>
    </Switch>
  );
};

export default App;
