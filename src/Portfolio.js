import React from "react";
import worthyreads from "./images/lifestyle/editing_editing_0009.jpg";
import ninjagame from "./images/ninjagame.png";
import sportsSupply from "./images/portraits/editing_Capture_0033.jpg";

function Portfolio() {
  const projects = [
    {
      title: "The art of black and white",
      image: worthyreads,
      description: "Looking to find the inner beauty in monochrome tones",
      links: {
        demo: "",
        code: "https://github.com/lxarmas/worthy_reads",
      },
    },
    {
      title: "The beauty in destruction",
      image: ninjagame,
      description: "book bases in chernobyl after effect",
      links: {
        demo: "https://lxarmas.github.io/Ninja_Odyssey/",
        code: "https://github.com/lxarmas/Ninja_Odyssey",
      },
    },
    {
      title: "third Project",
      image: sportsSupply,
      description: "Developed an e-commerce site with optimized state management, boosting conversion rate by 40%",
      links: {
        demo: "https://taskmanager.example.com",
        code: "https://github.com/lxarmas/graceshopper",
      },
    },
  ];

  return (
    <section className="py-8 px-4 ">
      <h2 className="text-6xl font-serif text-gray-400 tracking-tight mb-10 text-center">
  <span className="border-b-2 border-gray-500 pb-2">Projects</span>
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map( ( project, index ) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-2xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-2">{project.title}</h4>
              <p className="text-gray-700 text-sm mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#ffcc00] px-4 py-2 rounded hover:bg-[#ffb900]"
                >
                  Demo
                </a>
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-900 px-4 py-2 rounded hover:bg-gren-900"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ) )}
      </div>
    </section>
  );
}

export default Portfolio;
