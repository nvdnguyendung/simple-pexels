import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import HomePage from './containers/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
