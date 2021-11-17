import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import Pricing from './component.js/Pricing';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
     
      <Route  path='/' exact component={App} />
     
      <Route  path='/pricing' component={Pricing} />
      
    </Switch>
  </Router>,

  document.getElementById('root')
);
