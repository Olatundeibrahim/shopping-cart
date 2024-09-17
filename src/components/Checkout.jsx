import React, { useState } from "react";
import { useCart } from "../Context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});  // To store validation errors

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    // Name validation
    if (!customerInfo.name.trim()) {
      formErrors.name = "Full name is required.";
    }

    // Email validation (simple regex pattern)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!customerInfo.email || !emailRegex.test(customerInfo.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    // Address validation
    if (!customerInfo.address.trim()) {
      formErrors.address = "Shipping address is required.";
    }

    // Card number validation (16 digits)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(customerInfo.cardNumber)) {
      formErrors.cardNumber = "Card number must be 16 digits.";
    }

    // Expiry date validation (MM/YY format)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryDateRegex.test(customerInfo.expiryDate)) {
      formErrors.expiryDate = "Expiry date must be in MM/YY format.";
    }

    // CVV validation (3 or 4 digits)
    const cvvRegex = /^\d{3,4}$/;
    if (!cvvRegex.test(customerInfo.cvv)) {
      formErrors.cvv = "CVV must be 3 or 4 digits.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Thank you for your purchase, ${customerInfo.name}!`);
      // Add logic to process the payment here
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-10">
      <div className="absolute inset-0 bg-pattern bg-opacity-50"></div> {/* Background pattern */}
      <div className="relative max-w-3xl w-full p-6 bg-white shadow-2xl rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Checkout</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div id="checkout-form" className="space-y-8">
            
            {/* Order Summary Section */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Order Summary</h2>
              <ul className="mb-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between mb-2">
                    <span>{item.quantity} x {item.title}</span>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xl font-bold flex justify-between">
                <span>Total:</span>
                <span>${calculateTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            {/* Customer Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-700">Shipping & Payment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="example@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Address Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-600">Shipping Address</label>
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 ${
                      errors.address ? "border-red-500" : ""
                    }`}
                    placeholder="1234 Street Name, City, State"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Card Number Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={customerInfo.cardNumber}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 ${
                        errors.cardNumber ? "border-red-500" : ""
                      }`}
                      placeholder="1234 5678 9123 4567"
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                  </div>

                  {/* Expiry Date Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={customerInfo.expiryDate}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 ${
                        errors.expiryDate ? "border-red-500" : ""
                      }`}
                      placeholder="MM/YY"
                    />
                    {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                  </div>
                </div>

                {/* CVV Input */}
                <div className="w-full sm:w-1/2">
                  <label className="block text-sm font-medium text-gray-600">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={customerInfo.cvv}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 ${
                      errors.cvv ? "border-red-500" : ""
                    }`}
                    placeholder="123"
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Confirm Purchase
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
