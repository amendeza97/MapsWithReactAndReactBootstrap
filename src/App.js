import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MapOptionsContainer from './Pages/MapOptions/MapOptionsContainer';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MapOptionsContainer} />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
