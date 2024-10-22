import React, { useState, useEffect } from 'react';
import {Github, Linkedin, Twitter } from 'lucide-react';
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
        <div className="flex gap-4">
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
    </header>
  );
};

export default Header;
