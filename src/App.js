import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'


const App = () => (
  <Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>
</Router>
);

export default App;