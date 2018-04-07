import React from 'react';
import { Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Details from './components/Details/Details'

const App = () => (
    <div>
      <Route exact path="/" component={Home} />
      <Route path='/home' component={Home} />
      <Route path="/details/:city" component={Details} />
    </div>
);

export default App;
