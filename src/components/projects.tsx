import php from '../images/php.svg'; 
import sql from '../images/sql.svg'; 
import express from '../images/express.svg'; 
import jquery from '../images/jquery.svg';
import tailwind from '../images/tailwind.svg';
import Project1 from '../images/mesaa.png'; 
import Project2 from '../images/portfolio.png'; 
import Project3 from '../images/scripted.png'; 
import Project4 from '../images/nfg.png'; 
import Project5 from '../images/smartpuja.png'; 
import Project6 from '../images/xplr.png'; 
import Project7 from '../images/passwordmanager.png'; 
import Project8 from '../images/pythonchat.png'; 
import Project9 from '../images/pythonbank.png'; 
import Project10 from '../images/pythonscraper.png'; 
import Project11 from '../images/restaurantmenu.png'; 
import Project12 from '../images/eventposter.png'; 
import Project13 from '../images/novelcover.png'; 
import Project14 from '../images/brandingpackage.png'; 
import Project15 from '../images/productimage.png'; 
import Project16 from '../images/fantasynovel.png'; 
import Project17 from '../images/budgettracker.png'; 
import Project18 from "../images/menr.png"



import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaCss3, FaJsSquare, FaHtml5, FaPython, FaFileExcel, FaFileWord,  } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import {SiAdobephotoshop } from 'react-icons/si';

const projectsData = [
  {
    title: "MESAA: Food Ordering Web App",
    description: "A full-stack food ordering web application with real-time order tracking.",
    category: "Full Stack",
    techStack: [
      <DiMongodb key="MongoDB" className="w-6 h-6 mx-1" />,
      <img key="express" src={express} alt="Express" className="w-6 h-6 mx-1" />,
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <FaNodeJs key="NodeJS" className="w-6 h-6 mx-1" />,
      <img key="tailwind" src={tailwind} alt="TailwindCSS" className="w-6 h-6 mx-1" />,
    ],
    image: Project1,
  },
  {
    title: "Scripted: Personal Blog",
    description: "A feature-rich blogging platform with user authentication and markdown support.",
    category: "Full Stack",
    techStack: [
      <DiMongodb key="MongoDB" className="w-6 h-6 mx-1" />,
      <img key="express" src={express} alt="Express" className="w-6 h-6 mx-1" />,
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <FaNodeJs key="NodeJS" className="w-6 h-6 mx-1" />,
    ],
    image: Project3,
  },
  {
    title: "Web Portfolio",
    description: "Personal portfolio website showcasing projects and skills.",
    category: "Frontend",
    techStack: [
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <img key="tailwind" src={tailwind} alt="TailwindCSS" className="w-6 h-6 mx-1" />,
    ],
    image: Project2,
  },
  {
    title: "Smart Puja",
    description: "A modern web platform for religious services and offerings.",
    category: "Frontend",
    techStack: [
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <img key="tailwind" src={tailwind} alt="TailwindCSS" className="w-6 h-6 mx-1" />,
    ],
    image: Project5,
  },
  {
    title: "XPLR: Tours and Travel Guide",
    description: "Interactive travel guide website with booking features.",
    category: "Frontend",
    techStack: [
      <FaHtml5 key="html" className="w-6 h-6 mx-1" />,
      <FaCss3 key="css" className="w-6 h-6 mx-1" />,
      <FaJsSquare key="js" className="w-6 h-6 mx-1" />,
      <img key="jQuery" src={jquery} alt="Express" className="w-6 h-6 mx-1" />,
    ],
    image: Project6,
  },
  {
    title: "NFG Banking Dashboard",
    description: "Banking dashboard with secure CRUD operations.",
    category: "Backend",
    techStack: [
      <FaHtml5 key="html" className="w-6 h-6 mx-1" />,
      <FaCss3 key="css" className="w-6 h-6 mx-1" />,
      <FaJsSquare key="js" className="w-6 h-6 mx-1" />,
      <img key="php" src={php} alt="PHP" className="w-6 h-6 mx-1" />,
      <img key="sql" src={sql} alt="SQL" className="w-6 h-6 mx-1" />,
    ],
    image: Project4,
  },
  {
    title: "MERN CRUD App",
    description: "A basic template for MERN CRUD Operations",
    category: "Backend",
    techStack: [
      <DiMongodb key="MongoDB" className="w-6 h-6 mx-1" />,
      <img key="express" src={express} alt="Express" className="w-6 h-6 mx-1" />,
      <FaReact key="react" className="w-6 h-6 mx-1" />,
      <FaNodeJs key="NodeJS" className="w-6 h-6 mx-1" />,
      
    ],
    image: Project18,
  },
  {
    title: "Password Manager",
    description: "Secure password management application with encryption.",
    category: "Programming",
    techStack: [
      <FaPython key="python" className="w-6 h-6 mx-1" />,
    ],
    image: Project7, // Reusing image
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private messaging.",
    category: "Programming",
    techStack: [
      <FaPython key="node" className="w-6 h-6 mx-1" />,
      
    ],
    image: Project8, // Reusing image
  },
  {
    title: "Bank-Admin Application",
    description: "A banking application for an Admin user to perform CRUD on financial data.",
    category: "Programming",
    techStack: [
      <FaPython key="node" className="w-6 h-6 mx-1" />,
      
    ],
    image: Project9, // Reusing image
  },
  {
    title: "Job Scraper",
    description: "Automated job listing scraper with email notifications.",
    category: "Programming",
    techStack: [
      <FaPython key="python" className="w-6 h-6 mx-1" />,
    ],
    image: Project10, // Reusing image
  },
  {
    title: "Restaurant Menu Design",
    description: "Modern menu design for a local restaurant.",
    category: "Graphic Design",
    techStack: [
      <SiAdobephotoshop key="ps" className="w-6 h-6 mx-1" />,
    ],
    image: Project11, // Reusing image
  },
  {
    title: "Event Poster - Music Event",
    description: "Promotional poster design for a local music festival.",
    category: "Graphic Design",
    techStack: [
      <SiAdobephotoshop key="ps" className="w-6 h-6 mx-1" />,
    ],
    image: Project12, // Reusing image
  },
  {
    title: "Fantasy Novel Book Cover",
    description: "Cover design for a fantasy novel series.",
    category: "Graphic Design",
    techStack: [
      <SiAdobephotoshop key="ps" className="w-6 h-6 mx-1" />,
    ],
    image: Project13, // Reusing image
  },
  {
    title: "Branding Package - Local Startup",
    description: "Complete branding package including logo, business cards, and letterhead.",
    category: "Graphic Design",
    techStack: [
      <SiAdobephotoshop key="ps" className="w-6 h-6 mx-1" />,
    ],
    image: Project14, // Reusing image
  },
  {
    title: "Product Marketing Design",
    description: "Marketing materials for product launch campaign.",
    category: "Graphic Design",
    techStack: [
      <SiAdobephotoshop key="ps" className="w-6 h-6 mx-1" />,
    ],
    image: Project15, // Reusing image
  },
  {
    title: "Fantasy Fiction Novel",
    description: "Self-published fantasy fiction novel.",
    category: "Other",
    techStack: [
      <FaFileWord key="excel" className="w-6 h-6 mx-1" />,
    ]
    ,
    image: Project16, // Reusing image
  },
  {
    title: "Budget/Finance Tracker",
    description: "Comprehensive Excel-based finance tracking system.",
    category: "Other",
    techStack: [
      <FaFileExcel key="excel" className="w-6 h-6 mx-1" />,
    ],
    image: Project17, // Reusing image
  },
];

const Projects:React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const categories = [ "Frontend", "Backend","Full Stack", "Programming", "Graphic Design", "Other"];

  const filteredProjects = projectsData.filter(project => project.category === selectedCategory);

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
                opacity: Math.random(),
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 relative inline-block transform rotate-3 origin-top-right">
          Projects 🎨
          <div className="absolute bottom-[-10px] left-0 w-full flex flex-col items-center space-y-[-1px]">
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
            <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-400"></div>

          </div>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project, index) => (
            <a 
              key={index}
              href="https://github.com/bigyanadk07"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-90 p-4 w-full flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-lg font-semibold mb-2">{project.title}</div>
                <p className="text-sm text-gray-300 mb-2">{project.description}</p>
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