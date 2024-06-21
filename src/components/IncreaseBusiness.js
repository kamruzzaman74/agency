import React from 'react';
import { FaPalette, FaVideo, FaEdit, FaBullhorn } from 'react-icons/fa';

const increaseBusiness = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">How We Increase Your Business</h2>
        <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
          We specialize in enhancing your brand visibility and engagement through strategic services. Here’s what we offer:
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="mb-4 bg-blue-100 rounded-full p-3">
            <FaPalette className="text-blue-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Brand Creation</h3>
          <p className="text-gray-600">Craft a compelling brand identity that resonates with your audience.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="mb-4 bg-purple-100 rounded-full p-3">
            <FaVideo className="text-purple-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Video Making</h3>
          <p className="text-gray-600">Create engaging video content that tells your brand's story.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="mb-4 bg-green-100 rounded-full p-3">
            <FaEdit className="text-green-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Post Creation</h3>
          <p className="text-gray-600">Develop compelling social media posts that drive engagement.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="mb-4 bg-yellow-100 rounded-full p-3">
            <FaBullhorn className="text-yellow-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ad Creation</h3>
          <p className="text-gray-600">Design effective ads that reach your target audience.</p>
        </div>
      </div>
    </div>
  );
};

export default increaseBusiness;
