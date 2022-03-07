import React, { useState } from 'react';
import { useCartMutations } from '@store/Cart';

type AddToCartProps = {
  product: TProduct
}

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () => new Promise((resolve) => {
  window.setTimeout(resolve, 600);
});

const AddToCart = ({ product }: AddToCartProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartMutations();

  const handleSubmit = async () => {
    addToCartRequest()
      .then(() => {
        addToCart(product, quantity);
        setQuantity(quantity);
      });
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(target.value, 10));

  return (
    <div className="grid grid-cols-2">
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        step={1}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
      >
        Added to cart
      </button>
    </div>
  );
};

export default AddToCart;
