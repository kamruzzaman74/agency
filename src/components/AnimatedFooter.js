import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const AnimatedFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 mr-4 transition-colors duration-300"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center md:text-center">
          <span className="block mb-2 font-bold text-yellow-400">Phone: +88 01687976790</span>
          <span className="text-lg font-bold">
            <span className="text-green-400">&copy; 2024</span> growMore19. <span className="text-blue-400">All Rights Reserved.</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;




