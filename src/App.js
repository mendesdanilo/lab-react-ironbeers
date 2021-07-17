import React from 'react';
import './App.css';
import BeersList from './components/BeersList';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <>
      <Home />
      <Switch>
        <Route path="/beers-list" component={BeersList} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/beer-details/:beerId" component={BeerDetails} />
      </Switch>
    </>
  );
}

export default App;
