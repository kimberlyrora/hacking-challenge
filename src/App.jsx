/* eslint-disable jsx-quotes */
import React from 'react';
import { Router, Redirect } from '@reach/router';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import AddFamily from './pages/AddFamily';

const data = require('./db.json');

const App = () => (
  <div className='app'>
    <div className='app__header'>
      <Header />
    </div>
    <Router>
      {/* <div className='app__body'> */}
        <Login path='/' data={data[0]} />
        <AddFamily path='/addFamily' />
      {/* </div> */}
    </Router>
    <div className='app__footer'>
      <Footer />
    </div>
  </div>
);

export default App;
