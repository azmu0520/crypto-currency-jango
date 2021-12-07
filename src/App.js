import React from 'react';
import './App.css';
import { Layout, Typ } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar } from './Components';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'></div>
      <div className='footer'></div>
    </div>
  );
};

export default App;
