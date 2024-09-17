import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

      <div className="mb-8">
        <p className="text-lg text-gray-700"><strong>Store Address:</strong> OLATUNDE SHOPPING STORE </p>
        <p className="text-lg text-gray-700"><strong>Phone:</strong> <a href="tel:+1238053313123" className="text-blue-600 hover:underline">+1 (234) 8053313123</a></p>
        <p className="text-lg text-gray-700"><strong>Email:</strong> <a href="mailto:iolatunde289@gmail.com" className="text-blue-600 hover:underline">iolatunde289@gmail.com</a></p>
        <p className="text-lg text-gray-700"><strong>Business Hours:</strong> Mon-Fri: 9am - 6pm</p>
        <p className="text-lg text-gray-700"><strong>Follow Us:</strong> 
          <a href="https://facebook.com/olatundestore" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com/olatundestore" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://instagram.com/olatundestore" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone (optional)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509175!2d144.95373631531745!3d-37.8172099797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7dfbf%3A0x5045675218ce7e33!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2s!4v1591187428584!5m2!1sen!2s"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="w-full h-96"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;