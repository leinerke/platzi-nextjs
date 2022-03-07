import React from 'react';
import Image from 'next/image';
import ProductAttributes from '@components/ProductSummary/ProductAttributes';
import AddToCart from '@components/ProductSummary/AddToCart';

type ProductSummaryProps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mb-4">
        <div className="text-center">
          <Image src={product.image} width={340} height={340} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="mb-2">${product.price}</p>
          <p className="py-1 px-2 text-gray-500 bg-gray-200 rounded inline-block text-sm font-semibold">
            SKU: {product.sku}
          </p>
          <AddToCart product={product} />
        </div>
      </div>
      <ProductAttributes {...product.attributes} />
    </>
  );
};

export default ProductSummary;
