import React, { useState, useEffect } from 'react';
import PromoBanner from './PromoBanner';

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [exclusiveOffers, setExclusiveOffers] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch('https://api.example.com/deals');
        if (!response.ok) throw new Error('Failed to fetch deals');
        const data = await response.json();

        const exclusive = data.filter(deal => deal.isExclusive);
        const general = data.filter(deal => !deal.isExclusive);

        setDeals(general);
        setExclusiveOffers(exclusive);
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div>
      <PromoBanner />
      <h1 className="text-2xl font-bold mb-4">Current Deals</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Exclusive Offers</h2>
        {exclusiveOffers.length === 0 ? (
          <p>No exclusive offers available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {exclusiveOffers.map(deal => (
              <div key={deal.id} className={`border p-4 rounded-md ${deal.isExclusive ? 'exclusive-offer' : ''}`}>
                {deal.isExclusive && <span className="exclusive-badge">Exclusive</span>}
                <h3 className="text-lg font-semibold">{deal.title}</h3>
                <img src={deal.image} alt={deal.title} className="w-full h-auto mb-2" />
                <p className="text-gray-600">{deal.description}</p>
                <span className="block text-xl font-bold text-red-500">
                  ${deal.discountedPrice} <span className="line-through">${deal.originalPrice}</span>
                </span>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">General Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {deals.map(deal => (
            <div key={deal.id} className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold">{deal.title}</h3>
              <img src={deal.image} alt={deal.title} className="w-full h-auto mb-2" />
              <p className="text-gray-600">{deal.description}</p>
              <span className="block text-xl font-bold text-red-500">
                ${deal.discountedPrice} <span className="line-through">${deal.originalPrice}</span>
              </span>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Deals;
