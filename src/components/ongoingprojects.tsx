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
    name: "Skyrite",
    startDate: "01/07/2021",
    type: "Literature",
    description: "A fantasy-fiction literature project, a fantasy novel named Skyrite.",
  },
  {
    name: "Realtime Chat Application",
    startDate: "01/08/2024",
    type: "Web Development",
    description: "A web development project focusing on creating a real-time chat application.",
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
        <div className='flex justify-center'>
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
            <article
              key={index}
              className="relative overflow-hidden rounded-lg bg-gray-800 border-4 border-transparent bg-clip-border shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pointer-events-none rounded-lg" />
              <div className="relative p-6 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-800 z-10">
                <h3 className="text-xl lg:text-2xl text-yellow-500 font-semibold mb-2">{project.name}</h3>
                <time dateTime={project.startDate} className="block text-xs text-gray-400 mb-2">
                  {project.startDate}
                </time>
                <p className="text-sm text-green-500 font-bold mb-2">{project.type}</p>
                <p className="text-white">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
