import React from "react";
import Shop from "./Shop"; 

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-gray-300 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Olatunde Shop!</h1>
        <p className="text-lg mb-6">
          Find the best products at unbeatable prices.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
          Shop Now
        </button>
      </header>

      <section className="p-8 bg-gray-100 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="">
          <Shop / >
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>© 2024 Shop, All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
