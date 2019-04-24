import React from 'react';
import Home from './Home';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App () {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error404} />

      </Switch>
    </div>
  );
}

export default App;
