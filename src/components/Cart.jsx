import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, onUpdateCartQuantity, onRemoveFromCart } = useCart();
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      onUpdateCartQuantity(productId, parseInt(newQuantity, 10));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-md flex items-center"
              >
                <img
                  src={item.image || item.thumbnail} 
                  alt={item.title}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="border rounded p-1 w-16"
                    />
                    <span className="ml-4">Quantity: {item.quantity}</span>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xl font-semibold">
            Total: ${calculateTotalPrice().toFixed(2)}
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
