import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function importAll(r) {
  return r.keys().map(r);
}

const portraits = importAll(
  require.context("./images/portraits", false, /\.(jpg|jpeg|png)$/)
);
const lifestyle = importAll(
  require.context("./images/lifestyle", false, /\.(jpg|jpeg|png)$/)
);
const weddings = importAll(
  require.context("./images/weddings", false, /\.(jpg|jpeg|png)$/)
);

const images = [...portraits, ...lifestyle, ...weddings];

function Header() {
  const navigate = useNavigate();

  const [orientations, setOrientations] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const orientationsArray = await Promise.all(
        images.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => {
                resolve(img.width >= img.height ? "landscape" : "portrait");
              };
              img.src = src;
            })
        )
      );
      setOrientations(orientationsArray);
    };
    loadImages();
  }, []);

  // Slider settings: no autoplay, no fade, show 1 image at a time
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // manually click next/prev
    autoplay: false, // turn off auto-slide
    fade: false, // no fade transition
    pauseOnHover: true,
  };

  return (
    <header className="photo-header">
      <Slider {...settings} className="photo-carousel">
        {images.map((src, index) => (
          <div className="photo-slide" key={index}>
            <img
              src={src}
              alt={`Photo ${index + 1}`}
              loading="lazy"
              className={
                orientations[index] === "portrait"
                  ? "portrait-photo"
                  : "landscape-photo"
              }
            />
          </div>
        ))}
      </Slider>
    </header>
  );
}

export default Header;
