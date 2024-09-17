import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const quantityInput = document.getElementById(`quantity-${product.id}`);
    const quantity = parseInt(quantityInput?.value, 10);

    if (quantity > 0) {
      addToCart(product, quantity);
    }
  };

  return (
    <div>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="mb-4 w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <input
              type="number"
              min="1"
              defaultValue="1"
              id={`quantity-${product.id}`}
              className="border rounded p-1 w-16 mt-2"
            />
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

// import React, { useState, useEffect } from 'react';

// const Shop = () => {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) {
//           throw new Error(`Error fetching products: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         console.error('Error:', error);
//         setError(error.message);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Shop</h1>
//       {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map(product => (
//           <div key={product.id} className="border p-4 rounded-md">
//             <img src={product.thumbnail} alt={product.title} className="mb-4 w-full h-64 object-cover rounded-md" />
//             <h2 className="text-lg font-semibold">{product.title}</h2>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="font-bold">${product.price}</p>
//             <input
//               type="number"
//               min="1"
//               defaultValue="1"
//               id={`quantity-${product.id}`}
//               className="border rounded p-1 w-16 mt-2"
//             />
//             <button
//               onClick={() => {
//                 const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value, 10);
//                 addToCart(product, quantity);
//               }}
//               className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;
