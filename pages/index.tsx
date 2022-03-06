import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  const [avo, setAvo] = useState<TProduct>();

  useEffect(() => {
    fetch('/api/avo')
      .then(res => res.json())
      .then(({ data }) => setProductList(data));

    fetch('/api/avo/2zd33b8c')
      .then(res => res.json())
      .then(res => setAvo(res));
  }, []);

  return (
    <div>
      <Navbar />
      {avo && <div>{avo.id}</div>}
      <div>Platzi and Next.js!</div>
      {productList.map(product => (
        <div>{product.name}</div>
      ))}

    </div>
  );
};

export default HomePage;
