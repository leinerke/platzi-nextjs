import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

const ProductPage = () => {
  const { query: { id } } = useRouter();
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    fetch(`/api/avo/${id}`)
      .then(res => res.json())
      .then((res: TAPIAVODetailResponse) => setProduct(res));
  }, [id]);

  return (
    <Layout>
      {product && <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;
