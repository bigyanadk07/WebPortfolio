import React, { useState } from 'react';
import Svg from '../images/home-svg.png';

const HomeHero: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleContactClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white h-screen w-full py-20 px-6 lg:px-20 flex items-center overflow-hidden">
      {/* Gradient Background with Dots */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black z-0" />
        <div className="absolute inset-0 background-dots">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="dot"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(), // Optional: Add some opacity variation
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-32 left-10 w-48 h-48 bg-gradient-to-br from-crimson to-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-24 right-10 w-48 h-48 bg-gradient-to-br from-blue-500 to-teal-500 opacity-30 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-wide">
            Nice to meet you! <span className="wave">👋</span>
          </h1>
          <p className="text-xl lg:text-2xl font-medium mt-4 tracking-wide">
            I'm Bigyan Adhikari
          </p>
          <p className="text-lg lg:text-xl mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
            Based in Nepal, I'm a Web Developer-Designer, Programmer, and Writer passionate about building great UIs and writing fantasy-fiction and, of course, Games.
          </p>
          <div className="mt-8">
            <button
              onClick={handleContactClick}
              className="relative px-6 py-3 font-bold text-white rounded-lg group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span className="relative">Contact Me 📭</span>
            </button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Svg}
            alt="Home Hero Image"
            className="w-3/4 lg:w-full max-w-md lg:max-w-xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Alert Popup */}
      {showAlert && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg z-50">
          Scroll down for the contact form
        </div>
      )}
    </section>
  );
};

export default HomeHero;
