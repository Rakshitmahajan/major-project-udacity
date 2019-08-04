import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store";
import Routes from './routes';

const routing = (
  <Provider store={store}>
    <Router>
      <div> 
        <Routes />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
