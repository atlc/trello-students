import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <h1>Home lmao</h1>
        </Route>
        <Route exact path='/about'>
          <h1>About lmao</h1>
        </Route>
        <Route exact path='/projects'>
          <h1>Projects lmao</h1>
        </Route>
        <Route exact path='/contact'>
          <h1>Contact lmao</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
