import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css';





const AnimatedFooter = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-3 rounded-full mr-4 transition-transform duration-300 hover:scale-110 icon-animation"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white p-3 rounded-full mr-4 transition-transform duration-300 hover:scale-110 icon-animation"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110 icon-animation"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center md:text-center">
          <span className="block mb-2 font-bold text-yellow-500 animate__animated animate__fadeIn">Phone: +88 01687976790</span>
          <span className="text-lg font-bold">
            <span className="text-green-500 animate__animated animate__fadeIn">&copy; 2024</span>
            <span className="animate__animated animate__fadeIn"> growMore19.</span>
            <span className="text-blue-500 animate__animated animate__fadeIn"> All Rights Reserved.</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;




