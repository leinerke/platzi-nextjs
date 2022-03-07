import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch('/api/avo')
      .then(res => res.json())
      .then(({ data }: TAPIAvoResponse) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(({ id, image, name, price }: TProduct, key) => (
        <Link
          href={{ pathname: '/product/[id]', query: { id } }}
          key={key}
        >
          <a>
            <div
              className="shadow-lg border transition hover:-translate-y-2"
            >
              <div className="border-b text-center">
                <Image src={image} width={340} height={340} />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-500">${price}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
