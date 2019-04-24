import React from 'react';
import Home from './Home';
import Tam from './Tam';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App () {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path = '/tam' component={Tam} />
        <Route component={Error404} />

      </Switch>
    </div>
  );
}

export default App;
