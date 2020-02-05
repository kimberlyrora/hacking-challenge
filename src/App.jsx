/* eslint-disable jsx-quotes */
import React from 'react';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header/index';

const App = () => (
  <div className='app'>
    <div className='app__header'>
      <Header />
    </div>
    <div className='app__body'>
      <Login />
    </div>
    <div className='app__footer'>
      hello
    </div>
  </div>
);

export default App;
