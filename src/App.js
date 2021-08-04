import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Landing, Home, Activity, Geolocation } from './pages';
import { Nav } from './layout';

const App = () => {
  return (
    <>
    <Nav />
    <Switch>
      <Route path='/Little_Simz'>
        <Landing/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/activity'>
        <Activity/>
      </Route>
      <Route exact path='/location'>
        <Geolocation/>
      </Route>
    </Switch>
    </>
  );
};

export default App;
