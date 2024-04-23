import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-700 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Tic Tac Toe</h3>
              <p className="text-gray-200">Interactive web multiplayer game.</p>
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-0 hover:opacity-50 transition duration-300"></div>
          </div>
          {/* Project 2 */}
          <div className="relative bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Stock Management System</h3>
              <p className="text-gray-200">Software Project Web App for managing inventory of a liquor store and fetch stock data.</p>
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-0 hover:opacity-50 transition duration-300"></div>
          </div>
          {/* Project 3 */}
          <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Web Pages</h3>
              <p className="text-gray-200">Some test web pages for my web development course.</p>
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-0 hover:opacity-50 transition duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
