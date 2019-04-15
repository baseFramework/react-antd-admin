import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Home from './pages/Home/Home'

const App = () => (
  <Router>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
    <hr />

    <Route exact path="/" component={Home} />
  </div>
</Router>
);

export default App;
