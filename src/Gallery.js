import React from "react";
import { useParams } from "react-router-dom";

// Helper function to import all images from a folder
function importAll(r) {
  return r.keys().map(r);
}

// Preload all folders (static import paths)
const galleries = {
  portraits: importAll(require.context("./images/portraits", false, /\.(jpg|jpeg|png)$/)),
  products: importAll(require.context("./images/products", false, /\.(jpg|jpeg|png)$/)),
  weddings: importAll(require.context("./images/weddings", false, /\.(jpg|jpeg|png)$/)),
};

function Gallery() {
  const { category } = useParams();
  const images = galleries[category] || [];

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-light text-center text-gray-800 border-b border-gray-300 pb-3 mb-10 capitalize">
        {category} Gallery
      </h2>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={image}
                alt={`${category} ${index}`}
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">
          No images found for <strong>{category}</strong>.
        </p>
      )}
    </section>
  );
}

export default Gallery;
