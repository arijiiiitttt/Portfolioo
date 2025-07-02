import React from "react";

const timelineData = [
  {
    date: "September 2024",
    title: "SIH Hackathon",
    location: "Kolkata, India",
    image: "/sih.png",
    description:
      "Developed a web application that helps in ships re-routing using cutting-edge traffic and optimizing the time taken to reach the destination.",
    source: true,
  },
];

const Timeline = () => {
  return (
    <div className="bg-white py-7 px-4 sm:px-8">
      <div className="relative mx-auto max-w-4xl before:absolute before:left-5 sm:before:left-10 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-100 before:border-1-2 before:border-dotted">
        {timelineData.map((item, index) => (
          <div key={index} className="relative mb-14 flex items-start gap-5 sm:gap-8 pl-14 sm:pl-24">
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
              <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">{item.description}</p>
              {item.source && (
                <a className="mt-3 px-4 py-1 text-xs rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
                  Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
