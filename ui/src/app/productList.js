import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
            <img src={product.image} alt={product.name} className="mt-2 w-32 h-32 object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;