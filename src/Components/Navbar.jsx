import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar />
        <Typography.Title level={2} className='logo'>
          <Link to='/'> Crypto Curroncy</Link>
        </Typography.Title>
      </div>
    </div>
  );
};

export default Navbar;
