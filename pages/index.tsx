import React from 'react';
import Layout from '@components/Layout/Layout';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import ProductList from '@components/ProductList/ProductList';

const HomePage = () => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList />
    </Layout>
  );
};

export default HomePage;
