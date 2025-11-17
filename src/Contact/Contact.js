import { Typography, Box } from "@mui/material";
import MapComponent from "./MapComponent";
import ContactUs from "./ContactUs";

export default function Contact() {
  const boxes = [
    {
      id: 1,
      icon: "./assets/images/phone-icon.png",
      info: "010-020-0340",
      title: "Phone Number",
    },
    {
      id: 2,
      icon: "./assets/images/email-icon.png",
      info: "info@villa.co",
      title: "Business Email",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mt: 10 }}>
      {/* Background image + title */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="./assets/images/contact-bg.jpg"
          alt="Background"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#ee626b",
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              textTransform: "uppercase",
            }}
          >
            | Contact Us
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
              lineHeight: 1.3,
            }}
          >
            Get In Touch With <br /> Our Agents
          </Typography>
        </Box>
      </Box>

      {/* Map + Form side by side on desktop */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          px: { xs: 2, md: 6 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <MapComponent />
        </Box>
        <Box sx={{ flex: 1 }}>
          <ContactUs />
        </Box>
      </Box>

      {/* Contact boxes under form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          px: 2,
          flexWrap: "wrap",
          mb: 12,
        }}
      >
        {boxes.map((b) => (
          <Box
            key={b.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: "#fff",
              borderRadius: 3,
              boxShadow: 4,
              px: 4,
              py: 2,
              minWidth: 260,
              width: { xs: "100%", sm: "auto" },
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: 8,
              },
            }}
          >
            <Box
              component="img"
              src={b.icon}
              alt="icon"
              sx={{ width: 44, height: 44 }}
            />
            <Box>
              <Typography sx={{ fontWeight: "bold", color: "#1e1e1e" }}>
                {b.info}
              </Typography>
              <Typography sx={{ color: "#888", fontSize: "0.9rem" }}>
                {b.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
