import React from 'react';
import './App.css';
import axios from 'axios';
import AllBeersClass from './components/AllBeersClass';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import BeerDetails from './components/BeerDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={['/', '/home']} component={AllBeersClass} />
          <Route exact path="/beer-detail/:beerId" component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
