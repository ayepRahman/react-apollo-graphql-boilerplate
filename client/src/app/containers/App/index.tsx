import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import FullPageLoader from 'app/components/Loaders/FullPageLoader';
import Todos from 'app/containers/Todos';

const App: React.FC<AppProps> = props => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/">
          <Todos />
        </Route>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

interface AppProps {}

export default App;
