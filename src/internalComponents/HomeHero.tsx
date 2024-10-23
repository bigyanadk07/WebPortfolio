import React, { useState, useEffect } from 'react';
import { Github, Linkedin, MessageSquare, Twitter } from 'lucide-react';
import Profile from '../images/me.png'

const HomeHero:React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-6 lg:px-20 flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black z-0" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-32 left-10 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-10 w-48 h-48 bg-gradient-to-br from-blue-500 to-teal-500 opacity-30 rounded-full filter blur-3xl animate-pulse delay-1000" />
        
        {/* Animated grid with dots */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
          <div className="absolute inset-0 background-dots">
            {Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-sm font-mono text-purple-400">Welcome to my portfolio</h2>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Nice to meet you!{' '}
                <span className="inline-block animate-wave">👋</span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                I'm Bigyan Adhikari
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Based in Nepal, I'm a Web Developer-Designer, Programmer, and Writer passionate about building great UIs and writing fantasy-fiction and, of course, Games.
              </p>
            </div>

            {/* Social links */}
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

            {/* CTA Button */}
            <button
              onClick={handleContactClick}
              className="group relative px-6 py-3 font-medium text-white rounded-lg overflow-hidden transition-all duration-300 ease-out hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:translate-x-0">
                <div className="absolute w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all" />
              </div>
              <div className="relative flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Let's Connect</span>
              </div>
            </button>
          </div>

          {/* Right column - Animated illustration */}
          <div className="relative hidden lg:block">
            <div className="aspect-square w-full max-w-xl mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 animate-pulse" />
              <img
                src={Profile}
                alt="Profile Illustration"
                className="relative w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alert Popup */}
      {showAlert && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg text-white py-3 px-6 rounded-lg shadow-lg z-50 animate-fade-up">
          Scroll down for the contact form
        </div>
      )}
    </section>
  );
};

export default HomeHero;