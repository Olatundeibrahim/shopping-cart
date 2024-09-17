import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Orders from './Orders';

const Account = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white py-4 px-6">
          <h1 className="text-2xl font-bold">Account Section</h1>
        </div>
        <div className="p-6">
          <Routes>
            <Route path="login" element={user ? <Navigate to="/account/profile" /> : <Login />} />
            <Route path="register" element={user ? <Navigate to="/account/profile" /> : <Register />} />
            <Route path="profile" element={user ? <Profile /> : <Navigate to="/account/login" />} />
            <Route path="orders" element={user ? <Orders /> : <Navigate to="/account/login" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Account;
