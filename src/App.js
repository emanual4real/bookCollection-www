/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/books" component={Books} />
        <Redirect to="/" />
      </Switch>

    </Router>

  );
}

export default App;
