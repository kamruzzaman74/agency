import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaServicestack, FaInfo, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg p-4 fixed w-full z-10 top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold tracking-widest text-cyan-400">
                    <NavLink exact to="/" className="text-cyan-400">
                        NRC Marketing Agency <span className='text-rose-400'>(BE LOYAL & BE RARE)</span> 
                    </NavLink>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none text-blue-600">
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
                <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center md:flex md:flex-row md:static md:bg-transparent ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="md:flex md:items-center space-y-6 md:space-y-0 md:space-x-6">
                        <li>
                            <NavLink exact to="/" activeClassName="text-blue-600" className="text-gray-800 hover:text-blue-600 transition duration-300 text-lg flex items-center" onClick={() => setIsOpen(false)}>
                                <FaHome className="mr-2" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/service" activeClassName="text-blue-600" className="text-gray-800 hover:text-blue-600 transition duration-300 text-lg flex items-center" onClick={() => setIsOpen(false)}>
                                <FaServicestack className="mr-2" /> Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" activeClassName="text-blue-600" className="text-gray-800 hover:text-blue-600 transition duration-300 text-lg flex items-center" onClick={() => setIsOpen(false)}>
                                <FaInfo className="mr-2" /> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="text-blue-600" className="text-gray-800 hover:text-blue-600 transition duration-300 text-lg flex items-center" onClick={() => setIsOpen(false)}>
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



