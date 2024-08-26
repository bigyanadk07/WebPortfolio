import React from 'react';
import { FaReact, FaNodeJs, FaCss3, FaJsSquare, FaHtml5 } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import php from '../images/php.svg'; 
import sql from '../images/sql.svg'; 
import express from '../images/express.svg'; 
import jquery from '../images/jquery.svg';
import tailwind from '../images/tailwind.svg';
import Project1 from '../images/project-mesaa.png'; 
import Project2 from '../images/project-portfolio.png'; 
import Project3 from '../images/project-scripted.png'; 
import Project4 from '../images/project-nfg.png'; 
import Project5 from '../images/project-smartpuja.png'; 
import Project6 from '../images/project-XPLR.png'; 

const projectsData = [
  {
    title: "MESAA: Food Ordering Web App",
    description: "A food ordering web app built with the MERN stack.",
    techStack: [
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <FaNodeJs key="node" className="w-6 h-6 mx-1" />,
      <img key="express" src={express} alt="Express" className="w-6 h-6 mx-1" />,
      <DiMongodb key="mongodb" className="w-6 h-6 mx-1" />,
      <img key="tailwind" src={tailwind} alt="TailwindCSS" className="w-6 h-6 mx-1" />,
    ],
    image: Project1,
  },
  {
    title: "Web Portfolio",
    description: "A personal web portfolio built with ReactJS and TailwindCSS.",
    techStack: [
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <img key="tailwind" src={tailwind} alt="TailwindCSS" className="w-6 h-6 mx-1" />,
    ],
    image: Project2,
  },
  {
    title: "Scripted: Personal Blog",
    description: "A personal blog platform built with the MERN stack.",
    techStack: [
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <FaNodeJs key="node" className="w-6 h-6 mx-1" />,
      <img key="express" src={express} alt="Express" className="w-6 h-6 mx-1" />,
      <DiMongodb key="mongodb" className="w-6 h-6 mx-1" />,
      <img key="tailwind" src={tailwind} alt="TailwindCSS" className="w-6 h-6 mx-1" />,
    ],
    image: Project3,
  },
  {
    title: "NFG: Banking Dashboard for CRUD",
    description: "A banking dashboard for CRUD operations using HTML, CSS, JS, PHP, and MySQL.",
    techStack: [
      <FaHtml5 key="html" className="w-6 h-6 mx-1" />,
      <FaCss3 key="css" className="w-6 h-6 mx-1" />,
      <FaJsSquare key="js" className="w-6 h-6 mx-1" />,
      <img key="php" src={php} alt="PHP" className="w-6 h-6 mx-1" />,
      <img key="mysql" src={sql} alt="MySQL" className="w-6 h-6 mx-1" />,
    ],
    image: Project4,
  },
  {
    title: "Smart Puja",
    description: "A project built with ReactJS and TailwindCSS.",
    techStack: [
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <img key="tailwind" src={tailwind} alt="TailwindCSS" className="w-6 h-6 mx-1" />,
    ],
    image: Project5,
  },
  {
    title: "XPLR: Tours and Travel Guide Website",
    description: "A tours and travel guide website built with HTML, CSS, JS, and jQuery.",
    techStack: [
      <FaHtml5 key="html" className="w-6 h-6 mx-1" />,
      <FaCss3 key="css" className="w-6 h-6 mx-1" />,
      <FaJsSquare key="js" className="w-6 h-6 mx-1" />,
      <img key="jquery" src={jquery} alt="jQuery" className="w-6 h-6 mx-1" />,
    ],
    image: Project6,
  },
];

const Projects: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-6 lg:px-20">
      {/* Background Gradient and Dots */}
      <div className="absolute top-1/4 left-32 w-56 h-56 bg-gradient-to-br from-green-400 to-blue-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-32 w-56 h-56 bg-gradient-to-br from-pink-400 to-purple-600 opacity-30 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute top-32 left-32 w-56 h-56 bg-gradient-to-br from-teal-400 to-cyan-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-56 h-56 bg-gradient-to-br from-orange-400 to-red-600 opacity-30 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

      <div className="absolute inset-0 overflow-hidden">
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
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 relative inline-block transform rotate-3 origin-top-right">
          Projects 🎨
          <div className="absolute bottom-[-10px] left-0 w-full flex flex-col items-center space-y-[-1px]">
            <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-400"></div>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
          </div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <a 
              key={index}
              href="https://github.com/bigyanadk07"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gray-800 border-6 border-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" // Darkens image on hover
              />
              <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-70 p-4 w-full flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-lg font-semibold mb-2">{project.title}</div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
