import React, { useState } from "react";
import profile1 from "./images/portraits/editing_jpg _0215.jpg";
import profile2 from "./images/OwnerProfile3.jpg";
import profile3 from "./images/ale_headshot.png";
import profile4 from "./images/OwnerProfile1.JPG";

function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [profile1, profile2, profile3, profile4];

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <main className="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-20">
      {/* Header */}
      <header className="mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-gray-100 mb-6">
          <span className="border-b-2 border-gray-500 pb-2">
            Alejandro Armas
          </span>
        </h2>
        <p className="text-gray-400 text-xl italic">
          Photographer & Visual Storyteller — Los Angeles, California
        </p>
      </header>

      {/* Main Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image & Button */}
        <div className="relative max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
          <img
            src={images[currentImage]}
            alt={`Alejandro portrait ${currentImage + 1}`}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <button
            onClick={handleNext}
            aria-label="Next portrait"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-800 to-cyan-600 hover:from-sky-700 hover:to-cyan-500 text-white font-medium py-2 px-6 rounded-full shadow-lg active:scale-95 transition-all duration-300"
          >
            Next Portrait
          </button>
        </div>

        {/* Biography Text */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          <article>
            <h3 className="text-3xl font-serif mb-4 text-gray-100">
              About the Artist
            </h3>
            <p className="text-lg">
              Alejandro Armas is a Los Angeles–based photographer whose work
              explores the relationship between light, texture, and human
              emotion. His images evoke a sense of quiet reflection, often
              balancing the boundaries between realism and abstraction.
            </p>
          </article>

          <article>
            <h3 className="text-3xl font-serif mb-4 text-gray-100">
              Artistic Vision
            </h3>
            <p className="text-lg">
              Influenced by natural light and cinematic tones, Alejandro’s work
              captures the poetry of everyday moments — transforming simplicity
              into something timeless. Whether working with landscapes,
              portraits, or urban spaces, his approach is guided by emotion,
              storytelling, and atmosphere.
            </p>
          </article>

          <article>
            <h3 className="text-3xl font-serif mb-4 text-gray-100">
              Philosophy
            </h3>
            <p className="text-lg">
              “Photography, for me, is not about freezing time — it’s about
              translating feeling. Each frame is a quiet conversation between
              light and subject, between memory and imagination.”
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;
