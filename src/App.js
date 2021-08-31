import 'App.css';
import NotFound from 'components/NotFound/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ExampleComponent = React.lazy(() => import('features/ExampleFeature'));

function App() {
  return (
    <div className='app'>
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <Switch>
            <Route path='/example' component={ExampleComponent} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
