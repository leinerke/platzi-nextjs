import React from 'react';

const ProductAttributes = ({ description, ...otherAttributes }: TProductAttributes) => {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-2">About this avocado</h3>
      <p className="pb-4 mb-4 border-b">{description}</p>
      <div className="">
        <h3 className="text-2xl font-semibold p-4 bg-lime-100 border">Attributes</h3>
      </div>
      <div className="grid grid-cols-2 border-r border-l">
        {Object.keys(otherAttributes).map(key => (
          <>
            <div className="p-4 border-r border-b capitalize">
              {key}
            </div>
            <div className="p-4 border-r border-b">
              {otherAttributes[key as keyof typeof otherAttributes]}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default ProductAttributes;
