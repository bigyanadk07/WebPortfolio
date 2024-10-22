import React from 'react';
import {Github, Linkedin, Twitter } from 'lucide-react';

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
          <div className="flex gap-4 justify-center">
              <a href="https://github.com/bigyanadk07/" target="_blank" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/bigyanadhikari07" target="_blank" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
