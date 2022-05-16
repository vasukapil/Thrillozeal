// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import FirstHome from './home/FirstHome';
import Nainital from './Nainital/Nainital';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
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
