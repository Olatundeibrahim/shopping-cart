import React, { useState } from 'react';

const FaQsPage = () => {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');

  const products = [
    { id: 1, name: 'Product A', category: 'electronics', price: 100, rating: 4 },
    { id: 2, name: 'Product B', category: 'fashion', price: 50, rating: 5 },
    { id: 3, name: 'Product C', category: 'home', price: 30, rating: 3 },
    { id: 4, name: 'Product D', category: 'electronics', price: 200, rating: 5 },
    { id: 5, name: 'Product E', category: 'fashion', price: 80, rating: 4 },
  ];

  const filteredProducts = products.filter((product) => {
    return (
      (category === 'all' || product.category === category) &&
      (priceRange === 'all' || 
        (priceRange === 'low' && product.price < 50) ||
        (priceRange === 'mid' && product.price >= 50 && product.price <= 100) ||
        (priceRange === 'high' && product.price > 100)) &&
      (rating === 'all' || product.rating >= parseInt(rating))
    );
  });

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Filtered Products</h2>

      <div className="flex flex-wrap gap-6 mb-8">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Price Range</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="all">All Prices</option>
            <option value="low">Below $50</option>
            <option value="mid">$50 - $100</option>
            <option value="high">Above $100</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="all">All Ratings</option>
            <option value="4">4 stars & above</option>
            <option value="3">3 stars & above</option>
            <option value="2">2 stars & above</option>
            <option value="1">1 star & above</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded p-4">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Rating: {product.rating} stars</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No products match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default FaQsPage;
