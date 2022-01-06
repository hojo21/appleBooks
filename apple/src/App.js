import React from 'react';
import { Route, BrowserRouter as Router, Switch
} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Navigation from './components/navbar';
import AvailableBooks from './components/availableBooks';
import {
  Badger, Brands, Hur, Macleod, Magoon, Shafak, Singh
} from './components/bookPages';
import {
  CreateReview
} from './components/reusable';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact component={Home} path="/home" />
          <Route exact component={AvailableBooks} path="/books" />
          <Route exact component={Badger} path="/badger" />
          <Route exact component={Brands} path="/brands" />
          <Route exact component={Hur} path="/hur" />
          <Route exact component={Macleod} path="/macleod" />
          <Route exact component={Magoon} path="/magoon" />
          <Route exact component={Shafak} path="/shafak" />
          <Route exact component={Singh} path="/singh" />
          <Route exact component={CreateReview} path="/writeReview" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
