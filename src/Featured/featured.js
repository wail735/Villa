import Container from "@mui/material/Container";
import Image from "./Image";
import According from "./According";
import BasicCard from "./BasicCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Featured() {
  return (
    <>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {/* Colonne gauche : Image */}
          <Box sx={{ width: { xs: "100%", md: "33%" } }}>
            <Image />
          </Box>

          {/* Colonne centre : Titre + Accordéon */}
          <Box
            sx={{
              width: { xs: "100%", md: "34%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Aligné en haut
            }}
          >
            {/* Titre */}
            <Typography variant="h6" sx={{ color: "#ee626b", mb: 1 }}>
              | FEATURED
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Best Appartment & Sea View
            </Typography>

            {/* Accordéon */}
            <According />
          </Box>

          {/* Colonne droite : Carte d'infos */}
          <Box sx={{ width: { xs: "100%", md: "25%" }, alignSelf: "stretch" }}>
            <BasicCard />
          </Box>
        </Box>
      </Container>
    </>
  );
}
