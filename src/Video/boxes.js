import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function Boxes() {
  const box = [
    { id: 1, numéro: 34, title: "Buildings Finished Now" },
    { id: 2, numéro: 12, title: "Years Experience" },
    { id: 3, numéro: 24, title: "Awwards Won 2023" },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffeee9",
        dark: "#f15a29",
      },
    },
  });

  return (
    <div className="flex flex-wrap justify-around gap-6 mt-44 px-4">
      <ThemeProvider theme={theme}>
        {box.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: { xs: "100%", sm: 250 },
              height: 100,
              borderRadius: 2,
              bgcolor: "primary.main",
              boxShadow: 3,
              px: 2,
              py: 1,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "all 0.4s ease-in-out",
              "&:hover": {
                boxShadow: 6,
                transform: "scale(1.03)",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            {/* Cercle en haut à droite */}
            <Box
              sx={{
                width: 30,
                height: 30,
                bgcolor: "primary.dark",
                borderRadius: "50%",
                position: "absolute",
                top: -15,
                right: -15,
              }}
            />
            {/* Nombre */}
            <Typography
              variant="h4"
              component="div"
              fontWeight="bold"
              color="primary.dark"
            >
              {item.numéro}
            </Typography>

            {/* Texte ligne par ligne */}
            {item.title.split(" ").map((line, i) => (
              <Typography key={i} variant="body2" color="text.primary">
                {line}
              </Typography>
            ))}
          </Box>
        ))}
      </ThemeProvider>
    </div>
  );
}
