import React from 'react';
import { FaFacebookF, FaSearch, FaPaintBrush } from 'react-icons/fa';
import BoostServices from './BoostServices';

const services = [
  {
    icon: <FaFacebookF className="text-blue-500 w-12 h-12" />,
    title: 'Social Media Boost',
    description: 'Enhance your online presence with our expert social media marketing strategies to reach a broader audience and increase engagement.',
  },
  {
    icon: <FaPaintBrush className="text-red-500 w-12 h-12" />,
    title: 'Graphics Design',
    description: 'Create stunning visuals and compelling graphics that capture the essence of your brand and attract your target audience.',
  },
  {
    icon: <FaSearch className="text-green-500 w-12 h-12" />,
    title: 'SEO Services',
    description: 'Improve your website’s visibility on search engines with our comprehensive SEO services tailored to your business needs.',
  },
];

const Service = () => {
  return (
    <>
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12 mt-24 sm:mt-32 lg:mt-40">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
        <p className="text-lg sm:text-xl text-gray-700 mt-4">
          We offer a range of marketing services to help your business grow and succeed.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <BoostServices/>
    </>
  );
};

export default Service;

