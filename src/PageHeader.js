import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function PageHeader() {
  const location = useLocation();

  const getTitleFromPath = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/properties":
        return "Properties";
      case "/property-details":
        return "Property Details";
      case "/contact-us":
        return "Contact Us";
      default:
        return "Page";
    }
  };

  const pageTitle = getTitleFromPath(location.pathname);

  return (
    <div style={{ position: "relative" }}>
      <img
        alt={pageTitle}
        src="./assets/images/page-heading-bg.jpg"
        className="w-full h-[250px] sm:h-[350px] object-cover"
      />

      {/* المسار (HOME / PAGE) */}
      <Typography
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          backgroundColor: "white",
          fontSize: "1rem",
          padding: "1%",
        }}
      >
        {location.pathname === "/"
          ? "HOME"
          : `HOME / ${pageTitle.toUpperCase()}`}
      </Typography>

      {/* اسم الصفحة الكبير */}
      <Typography
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
        }}
      >
        {pageTitle}
      </Typography>
    </div>
  );
}
