import { Box } from "@mui/material";

export default function MapComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "300px", md: "450px" },
        borderRadius: "20px",
        overflow: "hidden",
        mt: 4,
        boxShadow: 3,
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.057836181724!2d-80.14451411622171!3d25.93909149339197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20Floride%2033160%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sdz!4v1753819401963!5m2!1sfr!2sdz"
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}
