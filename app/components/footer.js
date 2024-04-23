import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-2xl font-bold mb-4">Navnoor Singh</h3>
            <p className="text-gray-400">
            I am web developer specializes in creating web apps and responsive websites using HTML, CSS, JavaScript, and other technologies. I enjoy creating aesthetically pleasing and functional solutions, and have experience in frontend and backend programming. 
            </p>
          </div>
          
          <div className="w-1/2 sm:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
            <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
            <ul className="text-gray-400">
              <li>Calgary,AB</li>
              <li>
                  <a href="mailto:navnoor.singh@edu.sait.ca">navnoor.singh@edu.sait.ca</a>
              </li>

              <li>8252886975</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Stay Connected</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fa fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Navnoor Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
