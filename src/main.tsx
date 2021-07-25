import 'typeface-roboto';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Dashboard} from './dashboard/dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={''}>
          <Dashboard/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#app'));

