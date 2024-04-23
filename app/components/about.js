import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/3 relative w-64 h-64 md:w-96 md:h-96">
          <Image src="/mypic.jpg" alt="My Picture" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/6 text-center md:text-left mb-8 md:mb-0"></div>
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl text-white mb-8">I&apos;m &nbsp; 
          
          <b className='text-blue-500'>
          Navnoor Singh,
          </b>
          &nbsp; a passionate web developer. Let&apos;s build something amazing together!</p>
          <a href="https://github.com/navnoorsandhu" className="bg-blue-500 text-white hover:bg-blue-600 text-xl md:text-2xl font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out inline-block">GitHub</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/navnoor-singh-b76647273/" className="bg-blue-500 text-white hover:bg-blue-600 text-xl md:text-2xl font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out inline-block">LinkedIN</a>
        </div>
      </div>
    </section>
  );
};

export default About;
