import React from 'react';
import { FaRocket } from 'react-icons/fa';
import boostImage from '../photo/kk.webp'; // Ensure the path to your image is correct

const BoostServices = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="mb-8">
          <FaRocket className="text-blue-500 w-12 h-12 mx-auto animate-bounce" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Boost Your Business</h2>
        <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
          Our boost services are designed to elevate your business to new heights. With our expert strategies, you can increase your online presence, engage with a broader audience, and ultimately drive more sales. Let us help you unlock your business's full potential.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <img
          src={boostImage}
          alt="Boost Your Business"
          className="w-full h-auto max-w-md mx-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center mt-12">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">How We Help Your Business Grow</h3>
        <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Our comprehensive boost services include:
        </p>
        <ul className="text-left text-lg sm:text-xl text-gray-700 mt-4 max-w-3xl mx-auto list-disc list-inside space-y-4">
          <li>
            <strong>Enhanced Social Media Presence:</strong> We create and manage impactful social media campaigns that increase your brand's visibility and engagement.
          </li>
          <li>
            <strong>SEO Optimization:</strong> Our SEO experts optimize your website to rank higher in search engine results, driving more organic traffic.
          </li>
          <li>
            <strong>Content Marketing:</strong> We develop and distribute valuable, relevant content to attract and retain your target audience.
          </li>
          <li>
            <strong>Email Marketing:</strong> Our targeted email campaigns help you nurture leads and convert them into customers.
          </li>
          <li>
            <strong>Analytics and Reporting:</strong> We provide detailed reports and analytics to track your progress and refine strategies for optimal results.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoostServices;
