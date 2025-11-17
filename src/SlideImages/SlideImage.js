import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Données des slides
const slides = [
  {
    image: "/assets/images/banner-01.jpg",
    location: "Toronto, Canada",
    title: "HURRY!",
    subtitle: "GET THE BEST VILLA FOR YOU",
  },
  {
    image: "/assets/images/banner-02.jpg",
    location: "Miami, USA",
    title: "BE QUICK!",
    subtitle: "GET THE BEST VILLA IN TOWN",
  },
  {
    image: "/assets/images/banner-03.jpg",
    location: "Melbourn, Australia",
    title: "BOOK NOW!",
    subtitle: "FIND YOUR DREAM HOME",
  },
];

// Composant pour la flèche suivante
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
    onClick={onClick}
    aria-label="Next slide"
  >
    <FaArrowRight className="text-gray-800 text-lg" />
  </button>
);

// Composant pour la flèche précédente
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <FaArrowLeft className="text-gray-800 text-lg" />
  </button>
);

export default function SlideImage() {
  // Configuration du slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white border border-red-500 hover:bg-red-500 transition-all duration-300"></div>
    ),
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-[90vh]">
            {/* Image du slide */}
            <img
              src={slide.image}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay sombre pour meilleure lisibilité du texte */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Contenu textuel */}
            <div className="absolute top-[30%] left-[8%] z-20 text-white max-w-xl">
              <div className="bg-white text-black px-3 py-1 inline-block mb-4 text-lg font-semibold shadow">
                {slide.location.split(",")[0]},
                <span className="text-red-500">
                  {" "}
                  {slide.location.split(",")[1]}
                </span>
              </div>
              <h1 className="text-6xl md:text-6xl font-extrabold leading-tight">
                {slide.title}
              </h1>
              <h2 className="text-4xl md:text-4xl font-semibold mt-2">
                {slide.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}