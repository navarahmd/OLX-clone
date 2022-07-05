import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
      <Router>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Router>
      <Router>
        <Route path='/login'>
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
