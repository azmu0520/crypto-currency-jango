import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../servises/cryptoNewsApi';
const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 6 : 12,
  });
  console.log(cryptoNews);

  // const { isFetching } = useGetCrpytoNewsQuery({
  //   newsCategory: 'Cryptocurrency',
  //   count: simplified ? 10 : 100,
  // });

  // if (isFetching) return 'loading....';
  return <div>News</div>;
};

export default News;
