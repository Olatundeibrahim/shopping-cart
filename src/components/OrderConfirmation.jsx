import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4">Thank You for Your Order!</h1>
      <p>Your order has been successfully placed. We will process it soon and send you a confirmation email.</p>
      <Link to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Return to Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
