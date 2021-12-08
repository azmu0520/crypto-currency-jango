import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../servises/cryptoapi';
import Cryptocerrencies from './Cryptocerrencies';
import News from './News';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;
  // console.log(
  //   globalStats?.total,
  //   globalStats?.totalExchanges,
  //   globalStats?.totalMarketCap,
  //   globalStats?.total24hVolume,
  //   globalStats?.totalMarkets
  // );
  // console.log(typeof millify(globalStats?.total));
  if (isFetching) return 'Loading....';
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Status
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title='Total Cryptocurrencies'
            value={millify(globalStats?.total)}
            // value={'123'}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            // value={millify(globalStats?.totalMarketCap)}
            value={millify(globalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24h Volume'
            // value={millify(globalStats?.total24hVolume)}
            value={millify(globalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            // value={millify(globalStats?.totalMarkets)}
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocerrencies'>Show More</Link>
        </Title>
      </div>
      <Cryptocerrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto News
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/news'>Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
