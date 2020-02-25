import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Detail from './screens/Detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/item/:id" exact component={Detail} />
    </Switch>
  );
}
