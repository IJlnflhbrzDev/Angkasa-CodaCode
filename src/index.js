import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import * as serviceWorker from './serviceWorker';
import CompHomes from './Home-Pages/Home';
import CompNavbars from './ComponentNavbar/CompNavbar';
import Componentss from './App';
import { Button, Jumbotron } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, BrowserRouter
} from "react-router-dom";
import CompHome from './Home-Pages/Home';
import component from './App';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Fragment>
        <div>
          < CompNavbars />
        </div>
        <Route path="/hello" exact component={CompHome} />

        <Route path="/component" component={Componentss} />


      </Fragment>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
