import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="text-3xl font-bold text-gray-800">
            NRC Marketing Agency
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/service"
              className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="lg" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-gray-100`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={closeMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block py-2 px-4 text-gray-800 hover:text-red-600 transition duration-300 ease-in-out rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block py-2 px-4 text-gray-800 hover:text-red-600 transition duration-300 ease-in-out rounded-md"
            >
              About
            </Link>
            <Link
              to="/service"
              onClick={closeMobileMenu}
              className="block py-2 px-4 text-gray-800 hover:text-red-600 transition duration-300 ease-in-out rounded-md"
            >
              Service
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block py-2 px-4 text-gray-800 hover:text-red-600 transition duration-300 ease-in-out rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
