import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const timelineData = [
  {
    date: "21 May 2025",
    title: "CodeCircuit Hackathon",
    location: "Online",
    image: "/timeline/outlier.jpg",
    description:
      "Developed a goal tracking application featuring interactive task cards, smart defaults, error prevention, and visual feedback to provide a powerful yet simple goal management experience.",
    source: true,
    sourceLink: "https://github.com/arijiiiitttt/GoalTracker",
  },
  {
    date: "5 July 2025",
    title: "Builld.IT Hackathon",
    location: "Online",
    image: "/timeline/buildit.png",
    description:
      "Developed an accessibility tool for visually impaired students during the Build.IT Hackathon, leveraging innovative features to enhance learning and engagement.",
    source: true,
    sourceLink: "https://devpost.com/software/buddy-jp2gsb?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    date: "18 June 2025",
    title: "Bharatiya Antariksh Hackathon",
    location: "Online",
    image: "/timeline/bharatiyaa.png",
    description:
      "Developed a machine learning model leveraging satellite-derived Aerosol Optical Depth (AOD), meteorological variables, and ground-level PM2.5 measurements to accurately estimate and visualize ground-level PM2.5 concentrations, enabling spatial mapping and analysis of air quality."
    ,
    source: true,
    sourceLink: "https://github.com/arijiiiitttt/dustrak.git",
  },
  

];

const Timeline = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? timelineData : timelineData.slice(0, 4);

  return (
    <div className="bg-white py-7 px-4 sm:px-8">
      <div className="relative mx-auto max-w-4xl before:absolute before:left-5 sm:before:left-10 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-100 before:border-1-2 before:border-dotted">
        {itemsToShow.map((item, index) => (
          <div
            key={index}
            className="relative mb-10 flex items-start gap-5 sm:gap-8 pl-14 sm:pl-24"
          >
            {/* Timeline Icon */}
            <div className="absolute left-0 sm:left-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
              <img
                src={item.image}
                alt={item.title}
                className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
              />
            </div>

            {/* Content */}
            <div className="text-left">
              <div className="text-sm text-gray-500">{item.date}</div>
              <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.location}</p>
              <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
                {item.description}
              </p>
              {item.source && item.sourceLink && (
                <a
                  className="mt-3 inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
                  href={item.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-sm" />
                  Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {timelineData.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-medium rounded-full transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;
