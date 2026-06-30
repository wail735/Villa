import React, { useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/assets/images/banner-01.jpg",
    location: "Toronto",
    country: "Canada",
    title: "Find Your",
    titleHighlight: "Dream Villa",
    subtitle: "Exclusive luxury properties in the world's most desirable locations.",
    badge: "🏆 #1 Rated Agency",
  },
  {
    image: "/assets/images/banner-02.jpg",
    location: "Miami",
    country: "USA",
    title: "Live in",
    titleHighlight: "Pure Luxury",
    subtitle: "Breathtaking ocean-view properties curated for discerning buyers.",
    badge: "🌊 Beachfront Villas",
  },
  {
    image: "/assets/images/banner-03.jpg",
    location: "Melbourne",
    country: "Australia",
    title: "Discover",
    titleHighlight: "Premium Homes",
    subtitle: "Award-winning architecture meets unparalleled comfort and style.",
    badge: "✨ Premium Collection",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-6 top-1/2 z-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-gray-900 focus:outline-none transition-all duration-300 hover:scale-110"
    onClick={onClick}
    aria-label="Next slide"
  >
    <FaArrowRight size={14} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-6 top-1/2 z-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-gray-900 focus:outline-none transition-all duration-300 hover:scale-110"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <FaArrowLeft size={14} />
  </button>
);

export default function SlideImage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const handleBeforeChange = useCallback((_, next) => {
    setCurrentSlide(next);
    setAnimKey((k) => k + 1);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: handleBeforeChange,
    fade: true,
    cssEase: "ease-in-out",
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "90vh", minHeight: 560 }}>
      <Slider {...settings}>
        {slides.map((s, idx) => (
          <div key={idx} style={{ height: "90vh", minHeight: 560 }}>
            <div
              style={{
                height: "90vh",
                minHeight: 560,
                backgroundImage: `url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Animated Text Content */}
      <div
        className="absolute inset-0 z-20 flex flex-col justify-center"
        style={{ paddingLeft: "clamp(24px, 8vw, 120px)", paddingRight: "clamp(24px, 8vw, 120px)" }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={animKey} className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: "inline-block",
                background: "rgba(238,77,45,0.9)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "50px",
                marginBottom: "20px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {slide.badge}
            </motion.div>

            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif" }}>
                📍
              </span>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                {slide.location},{" "}
                <span style={{ color: "#ff6b4a" }}>{slide.country}</span>
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              {slide.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 800,
                background: "linear-gradient(135deg, #ff6b4a, #ee4d2d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              {slide.titleHighlight}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              {slide.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <Link to="/properties" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.5px",
                    padding: "14px 32px",
                    background: "linear-gradient(135deg, #ee4d2d, #c93d20)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    cursor: "pointer",
                    boxShadow: "0 8px 30px rgba(238,77,45,0.45)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 12px 40px rgba(238,77,45,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 8px 30px rgba(238,77,45,0.45)";
                  }}
                >
                  Explore Properties
                </button>
              </Link>
              <Link to="/contact-us" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    letterSpacing: "0.5px",
                    padding: "14px 32px",
                    background: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    border: "2px solid rgba(255,255,255,0.5)",
                    borderRadius: "50px",
                    cursor: "pointer",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.9)";
                    e.target.style.color = "#ee4d2d";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.15)";
                    e.target.style.color = "#fff";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Contact Agent
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Counter + Progress */}
      <div
        className="absolute z-20"
        style={{
          bottom: 40,
          right: "clamp(24px, 8vw, 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 12,
        }}
      >
        {/* Counter */}
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.1rem",
            fontWeight: 600,
          }}
        >
          <span style={{ fontSize: "1.8rem", color: "#fff" }}>
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 6px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: 8 }}>
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === currentSlide ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === currentSlide ? "#ee4d2d" : "rgba(255,255,255,0.4)",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute z-20"
        style={{
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "bounce 2s infinite",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", fontFamily: "'Inter', sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: 24,
            height: 38,
            border: "2px solid rgba(255,255,255,0.4)",
            borderRadius: 12,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "4px",
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              background: "#ee4d2d",
              borderRadius: 2,
              animation: "scrollDot 1.5s ease infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>
    </div>
  );
}