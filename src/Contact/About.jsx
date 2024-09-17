import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>Our Shop</strong>, your number one source for the best products at unbeatable prices.
          We're dedicated to giving you the very best of shopping experiences, with a focus on three core values:
          <strong> dependability</strong>, <strong>customer service</strong>, and <strong>affordability</strong>.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Founded in 2024, <strong>Our Shop</strong> has come a long way from its beginnings as a small online store.
          Our passion for offering affordable, high-quality products to our customers drove us to start this journey,
          and it’s the reason we continue to push boundaries in the online shopping world.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We now serve customers all over the world and are thrilled to be a part of the ever-evolving eCommerce industry.
          Whether you're looking for the latest gadgets, fashion trends, or home essentials, we aim to provide a seamless
          shopping experience with our carefully curated product collection.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or feedback,
          feel free to get in touch. Our team is always here to assist you.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-center font-semibold">
          Thank you for choosing <strong>Our Shop</strong>!
        </p>
      </div>
    </div>
  );
};

export default About;
