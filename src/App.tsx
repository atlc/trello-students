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
          <div className='text-gray-900 text-7xl dark:text-gray-100'><h1>Home lmao</h1></div>
        </Route>
        <Route exact path='/about'>
          <div className='text-gray-900 text-7xl dark:text-gray-100'><h1>About lmao</h1></div>
        </Route>
        <Route exact path='/projects'>
          <div className='text-gray-900 text-7xl dark:text-gray-100'><h1>Projects lmao</h1></div>
        </Route>
        <Route exact path='/contact'>
          <div className='text-gray-900 text-7xl dark:text-gray-100'><h1>Contact lmao</h1></div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
