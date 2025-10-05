import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./Header.css";

// Helper to import all images from a folder
function importAll(r) {
  return r.keys().map(r);
}

// Import from multiple folders
const portraits = importAll(
  require.context("./images/portraits", false, /\.(jpg|jpeg|png)$/)
);
const lifestyle = importAll(
  require.context("./images/lifestyle", false, /\.(jpg|jpeg|png)$/)
);
const weddings = importAll(
  require.context("./images/weddings", false, /\.(jpg|jpeg|png)$/)
);

// Combine all images
const images = [...portraits, ...lifestyle, ...weddings];

function Header() {
  const navigate = useNavigate();
  const Submit = () => navigate("/menu");

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,       // Number of images visible at once
    slidesToScroll: 1,
    arrows: true,          // Show arrows
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,  // For tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,   // For phones
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <header className="photo-header">
      <Slider {...settings} className="photo-carousel">
        {images.map((src, index) => (
          <div className="photo-slide" key={index}>
            <img src={src} alt={`Photo ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </Slider>
    </header>
  );
}

export default Header;
