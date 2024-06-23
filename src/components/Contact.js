// src/ContactPage.js
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import 'animate.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64">
      <h1 className="text-4xl font-bold mb-10 animate__animated animate__fadeInDown">Contact NRC Marketing Agency</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md animate__animated animate__fadeInUp">
        <div className="mb-6">
          <FaEnvelope className="inline-block mr-2 text-blue-500" />
          <span className="font-semibold">Email:</span>
          <span className="ml-2">nrcagency24@gmail.com</span>
        </div>
        <div className="mb-6">
          <FaMapMarkerAlt className="inline-block mr-2 text-red-500" />
          <span className="font-semibold">Address:</span>
          <span className="ml-2">222/10, Pabna Colony, Malibagh, Dhaka</span>
        </div>
        <div className="mb-6">
          <FaPhone className="inline-block mr-2 text-green-500" />
          <span className="font-semibold">Phone:</span>
          <span className="ml-2">+88 01687976790</span>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className={`w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
