import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.name} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{product.productName}</h3>
            <p>Price: {product.price}</p>
            <p>Rating: ${product.rating}</p>
            <p>Availability: {product.availability}</p>
            <p>Discount: {product.discount}%</p>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;