import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AddItem from './pages/Add/Add';
import ExampleMain from './pages/Main/Main';
import NotFound from 'components/NotFound/NotFound';

const ExampleComponent = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={ExampleMain} />
      <Route path={`${match.url}/add`} component={AddItem} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default ExampleComponent;
