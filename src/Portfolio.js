import React from "react";
import { useNavigate } from "react-router-dom";

// Example cover images for each folder — you can replace these with your actual cover photos
import portraitsCover from "./images/portraits/editing_Capture_0033.jpg";
import productsCover from "./images/products/editing_products_0211.jpg";
import weddingsCover from "./images/weddings/weddings_0025.jpg";

function Portfolio() {
  const navigate = useNavigate();

  // Each folder is a “project”
const projects = [
  {
    title: "Portraits",
    image: portraitsCover,
    description: "Capturing personality and emotion through expressive portrait photography.",
    path: "/projects/portraits",
  },
  {
    title: "Product Photography",
    image: productsCover,
    description: "Showcasing craftsmanship and design with artistic precision.",
    path: "/projects/products",
  },
  {
    title: "Weddings",
    image: weddingsCover,
    description: "Preserving the joy, emotion, and unforgettable moments of each celebration.",
    path: "/projects/weddings",
  },
];


  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-5xl font-light text-center text-gray-800 border-b border-gray-300 pb-3 mb-14">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(project.path)}
            className="cursor-pointer group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click conflict
                  navigate(project.path);
                }}
                className="mt-4 inline-block text-sm font-semibold text-gray-800 border-b border-gray-700 hover:text-gray-600 transition-colors"
              >
                View Gallery →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
