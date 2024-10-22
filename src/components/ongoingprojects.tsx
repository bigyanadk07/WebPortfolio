import React from 'react';

interface Project {
  name: string;
  startDate: string;
  type: string;
  description: string;
}

const projectsData: Project[] = [
  {
    name: "reDrift",
    startDate: "01/07/2024",
    type: "Game Development",
    description: "A game development project to create an isometric 2D adventure game using GODOT.",
  },
  {
    name: "Crash: Programming Language",
    startDate: "15/10/2024",
    type: "Language Development",
    description: "A custom programming language development project focusing on creating a new programming paradigm.",
  },
  {
    name: "ArcaneElements",
    startDate: "01/09/2024",
    type: "UI Library",
    description: "A comprehensive Tailwind UI component library website offering ready-to-use, customizable components.",
  },
  {
    name: "Personal Finance Tracker",
    startDate: "01/08/2024",
    type: "Full Stack Development",
    description: "A full-stack web application for managing personal finances, budgeting, and expense tracking.",
  }
];

const OngoingProjects: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black z-0" />
        <div className="absolute inset-0 background-dots z-0"></div>
        <div className="absolute top-32 left-16 w-48 h-48 bg-gradient-to-br from-yellow-400 to-red-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-12 w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-72 w-48 h-48 bg-gradient-to-br from-indigo-500 to-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-36 left-72 w-48 h-48 bg-gradient-to-br from-teal-400 to-blue-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mb-10">
        <div className="flex justify-center">
          <h2 className="text-4xl lg:text-2xl font-extrabold mb-12 relative inline-block transform -rotate-3 origin-top-left mt-10 text-center">
            Ongoing Projects🚧
            <div className="absolute bottom-[-10px] left-0 w-full flex flex-col items-center space-y-[-1px]">
              <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-400"></div>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
            </div>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl hover:animate-[background_4s_ease_infinite] bg-transparent"
            >
              {/* Gradient border container */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 transition-all duration-300 group-hover:bg-[length:400%_400%] group-hover:shadow-xl opacity-0 group-hover:opacity-100 group-hover:text-black" />
              
              {/* Content container */}
              <div className="relative rounded-xl bg-gray-900 m-[1px] p-6 !pt-16">
                <time dateTime={project.startDate} className="block text-xs text-gray-400">
                  {project.startDate}
                </time>
                <h3 className="mt-2 text-xl font-medium text-white ">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm font-bold text-green-500">
                  {project.type}
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-purple-900/50 px-2.5 py-0.5 text-xs text-purple-200">
                    Project
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-purple-900/50 px-2.5 py-0.5 text-xs text-purple-200">
                    {project.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;