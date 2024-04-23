import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="text-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md overflow-hidden py-8">
            <i className="fab fa-html5 text-6xl text-white mb-4"></i>
            <p className="text-gray-200">HTML</p>
          </div>

          <div className="text-center bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md overflow-hidden py-8">
            <i className="fab fa-css3-alt text-6xl text-white mb-4"></i>
            <p className="text-gray-200">CSS</p>
          </div>
 
          <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-lg shadow-md overflow-hidden py-8">
            <i className="fab fa-js text-6xl text-white mb-4"></i>
            <p className="text-gray-200">JavaScript</p>
          </div>

          <div className="text-center bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg shadow-md overflow-hidden py-8">
            <i className="fab fa-tailwind text-6xl text-white mb-4"></i>
            <p className="text-gray-200">Tailwind CSS</p>
          </div>

          <div className="text-center bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg shadow-md overflow-hidden py-8">
            <i className="fab fa-react text-6xl text-white mb-4"></i>
            <p className="text-gray-200">Next.js</p>
          </div>

          <div className="text-center bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-md overflow-hidden py-8">
            <i className="fab fa-figma text-6xl text-white mb-4"></i>
            <p className="text-gray-200">Figma</p>
          </div>

          <div className="text-center bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-md overflow-hidden py-8">
            <i className="fas fa-fire text-6xl text-white mb-4"></i>
            <p className="text-gray-200">Firebase</p>
          </div>

          <div className="text-center bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg shadow-md overflow-hidden py-8">
            <i className="fab fa-github text-6xl text-white mb-4"></i>
            <p className="text-gray-200">GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
