import React from 'react';
import './App.css';
import { Layout, Space, Typography } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Exchanges from './Components/Exchanges';
import Cryptocerrencies from './Components/Cryptocerrencies.jsx';
// import Cryptocerrencies from './Components/Cryptocerrencies.jsx';
import CryptoDetails from './Components/CryptoDetails';
import News from './Components/News';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/cryptocerrencies' element={<Cryptocerrencies />} />
              <Route path='/cryptoDetails' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white' }}>
            Cryotoverse <br />
            All right reserver
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
