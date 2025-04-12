import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Resume from '../assets/Anant-RESUME.pdf'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-sm shadow-lg text-white py-2' 
        : 'bg-gradient-to-r from-black to-gray-900 text-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold">
            <ScrollLink to="home" smooth={true} duration={500} className="flex items-center group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 
                              group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-extrabold text-white">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl tracking-tight font-extrabold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                  Anant Pratap Singh
                </span>
                <span className="text-xs text-gray-400 font-medium">Portfolio</span>
              </div>
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {[
                { name: 'Home', to: 'home' },
                { name: 'About', to: 'about' },
                { name: 'Projects', to: 'projects' },
                { name: 'Contact', to: 'contact' },
              ].map((item) => (
                <ScrollLink 
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </ScrollLink>
              ))}
              <a 
                href={Resume} 
                download="Anant-Pratap-Singh-Resume.pdf"
                className="ml-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
                          text-white px-5 py-2 rounded-md font-medium transition-all duration-300 
                          hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                        hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-gradient-to-b from-gray-900 to-black px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
          {[
            { name: 'Home', to: 'home' },
            { name: 'About', to: 'about' },
            { name: 'Projects', to: 'projects' },
            { name: 'Contact', to: 'contact' },
          ].map((item) => (
            <ScrollLink 
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium
                        border-l-2 border-transparent hover:border-blue-500 transition-all duration-200 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
          <a 
            href={Resume} 
            download="Anant-Pratap-Singh-Resume.pdf"
            className="mt-4 block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-blue-500
                      text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;