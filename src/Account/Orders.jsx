import React from 'react';

const Orders = () => {
  // Example orders data
  const orders = [
    { id: 1, date: '2024-09-01', status: 'Shipped' },
    { id: 2, date: '2024-08-15', status: 'Delivered' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <div className="space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-lg font-medium text-gray-800">Order #{order.id}</h3>
              <p className="text-gray-600">Order Date: {order.date}</p>
              <p className="text-gray-600">Status: {order.status}</p>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
