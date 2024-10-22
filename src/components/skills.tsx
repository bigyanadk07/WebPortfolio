import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaPython, FaGitAlt,FaJava  } from 'react-icons/fa';
import {SiAdobephotoshop } from 'react-icons/si';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import { SiTailwindcss, SiAdobe, SiAdobepremierepro } from 'react-icons/si';
import excelSvg from '../images/excel.svg'; // Import SVG file
import { FiFigma } from 'react-icons/fi';

const Skills: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-6 lg:px-20 flex flex-col items-center">
      {/* Background Gradient and Dots */}
      <div className="absolute top-1/4 left-64 w-56 h-56 bg-gradient-to-br from-yellow-400 to-red-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-64 w-56 h-56 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-30 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-24 right-0 w-48 h-48 bg-gradient-to-br from-red-500 to-teal-500 opacity-30 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-50 z-0" />
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

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 relative inline-block transform -rotate-3 origin-top-left">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-2">
          Skills 🔪
        </h2>
        <div className="absolute bottom-[-10px] left-0 w-full flex flex-col items-center space-y-[-1px]">
      <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-400"></div>
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
    </div>
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <SkillCard icon={<FaReact />} label="React" />
          <SkillCard icon={<DiNodejs />} label="Node.js/Express" />
            <SkillCard icon={<DiMongodb />} label="MongoDB" />
          <SkillCard icon={<SiTailwindcss />} label="TailwindCSS" />
          <SkillCard icon={<FaPython />} label="Python" />
          <SkillCard icon={<FaGitAlt />} label="Git" />
          <SkillCard icon={<FaJs />} label="JavaScript" />
          <SkillCard icon={<FaHtml5 />} label="HTML" />
          <SkillCard icon={<FaCss3 />} label="CSS" />
          <SkillCard icon={<FiFigma />} label="Figma" />
          <SkillCard icon={<img src={excelSvg} alt="Excel" className="w-12 h-12" />} label="Excel" />
          <SkillCard icon={<SiAdobe />} label="Adobe XD" />
          <SkillCard icon={<SiAdobephotoshop />} label="Adobe Photoshop" />
          <SkillCard icon={<FaJava/>} label="Java" />
          <SkillCard icon={<SiAdobepremierepro/>} label="Premiere Pro" />
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center relative transition-all duration-300 ease-in-out group">
    <div className="text-5xl mb-4 flex justify-center items-center">
      {icon}
    </div>
    <p className="text-xl font-medium">{label}</p>
    <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-green-500 group-hover:shadow-lg transition-all duration-300 ease-in-out" />
  </div>
);

export default Skills;
