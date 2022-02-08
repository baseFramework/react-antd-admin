import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'mobx-react'
// import stores from './stores'
// import services from './services'
import { BrowserRouter } from "react-router-dom";
// import AppRouter from './routers'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter basename={'/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
