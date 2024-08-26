import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Logo from '../images/bigyanLogo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 px-6 shadow-lg transition-colors duration-300 ${isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'} z-50`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-crimson transition-colors duration-300">
            <img src={Logo} className="w-16 h-auto" alt="Logo" />
          </a>
        </div>
        
        {/* Social Media Icons Section */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/bigyanadhikari07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/bigyanadk07/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
