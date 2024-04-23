import React from 'react';

const Header = () => {
  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <a href="#" className="text-white text-xl font-bold">Navnoor Singh</a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
            <li><a href="#skills" className="text-white hover:text-gray-300">Skills</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
