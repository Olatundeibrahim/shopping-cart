import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../Context/CartContext";

const Navbar = ({ error = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-gray-800 px-7 py-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link className="text-4xl font-bold text-gray-300 " to="/">Olatunde Store</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-4 absolute md:static left-0 top-16 md:top-auto w-full md:w-auto bg-gray-800 md:bg-transparent transition-transform transform md:transform-none ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <li>
            <Link
              to="/"
              className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/deals"
              className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
            >
              Deals
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link
                  to="/account/profile"
                  className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/account/orders"
                  className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
                >
                  Orders
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/account/login"
                  className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/account/register"
                  className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
                >
                  Register
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              to="/contact"
              className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 block md:inline-block rounded-md text-sm font-medium"
            >
              FAQs
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/cart"
            className="text-white hover:text-yellow-400 flex items-center space-x-2"
          >
            <FaShoppingCart size={20} />
            <span>Cart ({cartItems.length})</span>
          </Link>
          <Link
            to="/checkout"
            className="text-white hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-2 text-center">{error}</div>
      )}
    </nav>
  );
};

export default Navbar;
