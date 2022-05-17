// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import FirstHome from './home/FirstHome';
import Nainital from './Nainital/Nainital';
import Destination from './Components/Destinations/Destination';
import Magicslider from './Main/Magicslider';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/magic">
          <Magicslider />
        </Route>
        <Route path="/nainital">
          <Nainital/>
        </Route>
        <Route path="/">
          <FirstHome/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
