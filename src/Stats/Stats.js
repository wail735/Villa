import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { id: 1, value: 500, suffix: "+", label: "Premium Properties", icon: "🏡" },
  { id: 2, value: 1200, suffix: "+", label: "Happy Clients", icon: "😊" },
  { id: 3, value: 15, suffix: "yrs", label: "Experience", icon: "🏆" },
  { id: 4, value: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
];

function CountUp({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background circles */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(238,77,45,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(238,77,45,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "#ee4d2d",
              display: "block",
              marginBottom: 12,
            }}
          >
            Our Track Record
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Numbers That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff6b4a, #ee4d2d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Speak
            </span>{" "}
            for Us
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "40px 28px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(10px)",
                cursor: "default",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                background: "rgba(238,77,45,0.08)",
                borderColor: "rgba(238,77,45,0.3)",
                y: -4,
              }}
            >
              {/* Top gradient line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, #ee4d2d, #ff6b4a)",
                  borderRadius: "20px 20px 0 0",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  fontSize: "2.2rem",
                  marginBottom: 16,
                  display: "block",
                  lineHeight: 1,
                }}
              >
                {stat.icon}
              </div>

              {/* Number */}
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#ee4d2d",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isInView}
                />
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  letterSpacing: "0.3px",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
