import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 ">
        <div className='flex justify-center'>
            <div className='w-10/12 h-0.5 rounded-xl bg-gray'>
            </div>
        </div>
        
      <div className="max-w-7xl mx-auto px-4">
        {/* Centered Content */}
        <div className="text-center">
          {/* Name with a simple border and gradient effect */}
          <h2 className="text-4xl lg:text-2xl font-extrabold mb-12 relative inline-block transform -rotate-3 origin-top-left mt-10">
      <h2 className="text-4xl lg:text-2xl font-extrabold mb-2">
          Bigyan Adk
        </h2>
        <div className="absolute bottom-[-10px] left-0 w-full flex flex-col items-center space-y-[-1px]">
      <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-400"></div>
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
    </div>
</h2>
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
