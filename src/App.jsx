/* eslint-disable jsx-quotes */
import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import './App.css';
// import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import AddFamily from './pages/AddFamily';

const data = require('./db.json');

const Login = React.lazy(() => import('./pages/Login'))

const App = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <div className='app'>
    <div className='app__header'>
      <Header />
    </div>
    <Router>
      {/* <div className='app__body'> */}
        <Login path='/' data={data[0]} />
        <AddFamily path='/addFamily' data={data[0]} />
      {/* </div> */}
    </Router>
    <div className='app__footer'>
      <Footer />
    </div>
  </div>
  </Suspense>
);

export default App;
