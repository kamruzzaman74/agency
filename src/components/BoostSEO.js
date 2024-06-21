// src/components/BoostSEO.js
import React from 'react';
import { FaFacebook, FaSearch, FaChartLine } from 'react-icons/fa';
import 'animate.css';
import bI1 from '../photo/LLL.webp';
import bI2 from '../photo/HHH.jpg';

import bI3 from '../photo/GG.png';
const BoostSEO = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 animate__animated animate__fadeInDown">
        Boost Your Business with Our Services
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center animate__animated animate__fadeInLeft">
          <FaFacebook className="text-blue-600 text-6xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook Boost</h3>
          <p className="text-gray-700 mb-4">
            Reach a wider audience and increase your brand visibility with our tailored Facebook Boost campaigns.
          </p>
          <img
          src={bI1}
          alt="Boost Your Business"
          className="w-full h-auto max-w-md mx-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
        />
          <span role="img" aria-label="rocket" className="text-3xl">🚀</span>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center animate__animated animate__fadeInUp">
          <FaSearch className="text-green-600 text-6xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Increase</h3>
          <p className="text-gray-700 mb-4">
            Improve your website's search engine rankings and attract more visitors with our expert SEO services.
          </p>
          <img
          src={bI2}
          alt="Boost Your Business"
          className="w-full h-auto max-w-md mx-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
        />
          <span role="img" aria-label="chart" className="text-3xl">📈</span>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center animate__animated animate__fadeInRight">
          <FaChartLine className="text-red-600 text-6xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Growth</h3>
          <p className="text-gray-700 mb-4">
            Drive more sales and grow your client base with our customized marketing strategies.
          </p>
          <img
          src={bI3}
          alt="Boost Your Business"
          className="w-full h-auto max-w-md mx-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
        />
          <span role="img" aria-label="growth" className="text-3xl">🌱</span>
        </div>
      </div>
    </div>
  );
};

export default BoostSEO;
