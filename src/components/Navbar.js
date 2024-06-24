
// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../components/Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const isDesktop = window.innerWidth >= 768; // Adjust the breakpoint as needed
      if (isDesktop) {
        if (window.scrollY > 0) {
          navbar.classList.add('fixed-navbar');
        } else {
          navbar.classList.remove('fixed-navbar');
        }
      }
    }
  };

  useEffect(() => {
    handleScroll(); // Initial check on mount

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white p-4 md:p-0 w-full md:w-full relative z-10 navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-extrabold text-teal-300">
         NRC Marketing Agency
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            Home
          </Link>
         
          <Link to="/about" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            About
          </Link>
          <Link to="/service" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            Service
          </Link>
          <Link to="/contact" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            Contact
          </Link>
          
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none">
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden fixed top-0 left-0 h-screen w-full bg-white z-20 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="h-full flex flex-col justify-center items-center space-y-4 p-4">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            Home
          </Link>
         
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            About
          </Link>
          <Link
            to="/service"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            Service
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            Contact
          </Link>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;




