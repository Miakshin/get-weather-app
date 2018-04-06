import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Details from './components/Details/Details'

const App = () => (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
    </div>
);

export default App;
