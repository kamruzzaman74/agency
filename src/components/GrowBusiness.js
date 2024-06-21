import React from 'react';
import { FaChartLine, FaUsers, FaBullhorn, FaHandshake } from 'react-icons/fa';

const GrowBusiness = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">How We Help Grow Small Businesses in Dhaka City</h2>
        <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
          At our company, we are dedicated to supporting startups and small businesses in Dhaka City through effective marketing strategies. Here’s how we can help your business thrive:
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <FaChartLine className="text-blue-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Data-Driven Strategies</h3>
          <p className="text-gray-600">Utilize data to create tailored marketing strategies that drive growth and maximize ROI.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <FaUsers className="text-purple-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Audience Engagement</h3>
          <p className="text-gray-600">Engage with your target audience through compelling content and interactive campaigns.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <FaBullhorn className="text-green-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Brand Awareness</h3>
          <p className="text-gray-600">Increase your brand's visibility and reach in Dhaka City with strategic advertising and promotions.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <FaHandshake className="text-yellow-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Partnership and Support</h3>
          <p className="text-gray-600">Provide personalized support and guidance to help you navigate challenges and seize opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default GrowBusiness;
