import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MapOptionsContainer from './Pages/MapOptions/MapOptionsContainer';

import './App.css';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MapOptionsContainer} />
        </Switch>
      </BrowserRouter>
      <footer className="footer m-0 p-1">
        <h6 className="textFooter">Made by Alejandro Méndez Astudillo - 2020</h6>
      </footer>
    </React.Fragment>
  );

}

export default App;
