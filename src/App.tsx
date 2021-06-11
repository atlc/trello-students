import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Board from './views/Board';
import SingleCard from './views/SingleCard';
import Editable from './views/Editable';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Create Card modal here, use a hook to hide/show */}
      <Switch>
        <Route exact path='/'>
          <div className='text-gray-900 text-7xl dark:text-gray-100'><h1>Home lmao</h1></div>
        </Route>
        <Route exact path='/board'>
          <Board />
        </Route>
        <Route exact path='/details'>
          <SingleCard />
        </Route>
        <Route exact path='/edit'>
          <Editable />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
