import React, { Fragment } from 'react';
import './CustomElements/CustomScript'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import * as serviceWorker from './serviceWorker';
import CompHomes from './Home-Pages/Home';
import CompNavbars from './ComponentNavbar/CompNavbar';
import ComponentLis from './ComponentList/CompListHtml'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PengenalanHtml from './ComponentList/HTML/CompengenalanHtml'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Fragment>
        <div>
          <CompNavbars />
        </div>
        <Route path="/hello" exact component={CompHomes} />
        <Route path="/list-learn-html" exact component={ComponentLis} />
        <Route path="/learn-html" exact component={PengenalanHtml} />



      </Fragment>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
