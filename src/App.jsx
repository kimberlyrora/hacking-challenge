/* eslint-disable jsx-quotes */
import React from 'react';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const data = require('./db.json');

const App = () => (
  <div className='app'>
    <div className='app__header'>
      <Header />
    </div>
    <div className='app__body'>
      <Login data={data[0]} />
    </div>
    <div className='app__footer'>
      <Footer />
    </div>
  </div>
);

export default App;
