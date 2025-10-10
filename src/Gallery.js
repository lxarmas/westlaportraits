import React from "react";
import { useParams } from "react-router-dom";

function importAll(r) {
  return r.keys().map(r);
}

const galleries = {
  portraits: importAll(require.context("./images/portraits", false, /\.(jpg|jpeg|png)$/)),
  products: importAll(require.context("./images/products", false, /\.(jpg|jpeg|png)$/)),
  weddings: importAll(require.context("./images/weddings", false, /\.(jpg|jpeg|png)$/)),
};

function Gallery() {
  const { category } = useParams();
  const images = galleries[category] || [];

  if (images.length === 0) {
    return <p className="text-center mt-10">No images found for <strong>{category}</strong>.</p>;
  }

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-light text-center text-gray-800 border-b border-gray-300 pb-3 mb-10 capitalize">
        {category} Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
            <img
              src={src}
              alt={`${category} ${index}`}
              className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
