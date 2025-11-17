import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Typography,
  Button,
  Stack,
  Card,
  Divider,
  Box,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Ideal() {
  const btn = [
    { id: 1, title: "Appartement" },
    { id: 2, title: "Villa House" },
    { id: 3, title: "Penthouse" },
  ];

  const contents = {
    1: {
      boxes: [
        { id: 1, title: "Total Flat Space", info: "185 m2" },
        { id: 2, title: "Floor number", info: "26th" },
        { id: 3, title: "Number of rooms", info: "4" },
        { id: 4, title: "Parking Available", info: "Yes" },
        { id: 5, title: "Payment Process", info: "Bank" },
      ],
      image: "/assets/images/deal-01.jpg",
      textTitle: "Extra Info About Apartment",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod tempor pack incididunt ut labore et dolore magna aliqua.`,
      more: `When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.`,
    },
    2: {
      boxes: [
        { id: 1, title: "Total Flat Space", info: "250 m2" },
        { id: 2, title: "Floor number", info: "Ground" },
        { id: 3, title: "Number of rooms", info: "6" },
        { id: 4, title: "Parking Available", info: "Yes" },
        { id: 5, title: "Payment Process", info: "Cash" },
      ],
      image: "/assets/images/deal-02.jpg",
      textTitle: "Extra Info About Villa",
      text: `Spacious villa with garden and garage. Ideal for large families.`,
      more: `Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.`,
    },
    3: {
      boxes: [
        { id: 1, title: "Total Flat Space", info: "320 m2" },
        { id: 2, title: "Floor number", info: "34th" },
        { id: 3, title: "Number of rooms", info: "6" },
        { id: 4, title: "Parking Available", info: "Yes" },
        { id: 5, title: "Payment Process", info: "Bank" },
      ],
      image: "/assets/images/deal-03.jpg",
      textTitle: "Extra Info About Penthouse",
      text: `Luxurious penthouse with panoramic views and modern design.`,
      more: `Live above the city in elegance and peace.`,
    },
  };

  const [selected, setSelected] = useState(1);

  const { boxes, image, textTitle, text, more } = contents[selected];

  return (
    <div className="bg-slate-100 w-full py-20 mt-10">
      <Container maxWidth="lg">
        {/* Titre principal */}
        <div className="mb-10">
          <Typography sx={{ color: "#ee626b", fontWeight: "bold" }}>
            | BEST DEAL
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold" }}>
            Find Your Best Deal <br /> Right Now!
          </Typography>
        </div>

        {/* Boutons */}
        <Stack direction="row" spacing={2} mb={6}>
          {btn.map((buton) => (
            <Button
              key={buton.id}
              onClick={() => setSelected(buton.id)}
              variant="contained"
              style={{
                backgroundColor: selected === buton.id ? "#ee4d2d" : "#1e1e1e",
                color: "white",
                border: "none",
              }}
            >
              {buton.title}
            </Button>
          ))}
        </Stack>

        {/* Contenu principal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected} // 👈 TRÈS IMPORTANT pour que l’animation se relance
            className="flex flex-col lg:flex-row items-start gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Box Info */}
            <Card
              sx={{
                width: 320,
                borderRadius: 3,
                boxShadow: 3,
                p: 3,
                backgroundColor: "#fff",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.03)",
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <Stack spacing={6}>
                {boxes.map((box, index) => (
                  <div key={box.id}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography sx={{ fontSize: 14 }}>{box.title}</Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                        {box.info}
                      </Typography>
                    </Box>
                    {index < boxes.length - 1 && <Divider sx={{ mt: 1 }} />}
                  </div>
                ))}
              </Stack>
            </Card>

            {/* Image */}
            <div className="w-full lg:w-[45%]">
              <img
                src={image}
                alt="property"
                className="rounded-lg w-full object-cover"
              />
            </div>

            {/* Texte à droite */}
            <div className="flex-1 space-y-4 ">
              <Typography variant="h6" fontWeight="bold">
                {textTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {more}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  borderRadius: "30px",
                  backgroundColor: "#ee4d2d",
                  color: "#fff",
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "#d8432a",
                  },
                }}
              >
                <CalendarMonthIcon />
                Schedule a visit
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  );
}
