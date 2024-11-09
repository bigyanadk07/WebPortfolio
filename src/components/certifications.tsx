import React from 'react';

const Certifications: React.FC = () => {
  // Sample data for certifications
  const certificationData = [
    {
      title: "Java Programming Certification",
      issuer: "Great Learning",
      date: "November 2024",
      link: "https://www.mygreatlearning.com/certificate/KUBQCROR",
    },
    {
      title: "  Advanced Cyber Security - Threats and Governance",
      issuer: "Great Learning",
      date: "November 2024",
      link: "https://www.mygreatlearning.com/certificate/BOONRYAH",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-6 lg:px-20 flex flex-col items-center"
    >
      <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl lg:text-5xl font-extrabold mb-2">
          Certifications
        </h2>
        <div className="absolute bottom-[-10px] left-0 w-full flex flex-col items-center space-y-[-1px]">
      <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-400"></div>
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-500"></div>
    </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationData.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-2">Issued by: {cert.issuer}</p>
              <p className="text-gray-500 text-sm">Completed: {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 block"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;