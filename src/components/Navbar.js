import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaServicestack, FaInfo, FaEnvelope } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg p-4 fixed w-full z-10 top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <NavLink exact to="/" className="text-xl font-bold tracking-widest text-cyan-600 flex items-center">
                        NRC Marketing Agency
                        <span className='text-rose-600'>(BE LOYAL & BE RARE)</span>
                    </NavLink>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none text-blue-600">
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
                <div className={`md:hidden ${isOpen ? 'fixed top-0 left-0 right-0 bottom-0 bg-white z-20 flex flex-col items-center justify-center' : 'hidden'}`}>
                    <ul className="flex flex-col items-center space-y-4">
                        <li>
                            <NavLink exact to="/" activeClassName="text-blue-600" className="text-gray-900 hover:text-blue-600 transition duration-300 text-lg flex items-center" onClick={() => setIsOpen(false)}>
                                <FaHome className="mr-2" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/service" activeClassName="text-blue-600" className="text-gray-900 hover:text-blue-600 transition duration-300 text-lg flex items-center" onClick={() => setIsOpen(false)}>
                                <FaServicestack className="mr-2" /> Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" activeClassName="text-blue-600" className="text-gray-900 hover:text-blue-600 transition duration-300 text-lg flex items-center" onClick={() => setIsOpen(false)}>
                                <FaInfo className="mr-2" /> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="text-blue-600" className="text-gray-900 hover:text-blue-600 transition duration-300 text-lg flex items-center" onClick={() => setIsOpen(false)}>
                                <FaEnvelope className="mr-2" /> Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="md:flex md:items-center md:space-x-6 hidden md:block">
                    <ul className="md:flex md:items-center md:space-x-6">
                        <li>
                            <NavLink exact to="/" activeClassName="text-blue-600" className="text-gray-900 hover:text-blue-600 transition duration-300 text-lg flex items-center">
                                <FaHome className="mr-2" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/service" activeClassName="text-blue-600" className="text-gray-900 hover:text-blue-600 transition duration-300 text-lg flex items-center">
                                <FaServicestack className="mr-2" /> Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" activeClassName="text-blue-600" className="text-gray-900 hover:text-blue-600 transition duration-300 text-lg flex items-center">
                                <FaInfo className="mr-2" /> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="text-blue-600" className="text-gray-900 hover:text-blue-600 transition duration-300 text-lg flex items-center">
                                <FaEnvelope className="mr-2" /> Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


