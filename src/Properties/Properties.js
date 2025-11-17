import {
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Divider,
  Box,
} from "@mui/material";
import "../App.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "./modal";
import ModifierModal from "./modiferModal";
import DeleteModal from "./deletemodal";
import { useState } from "react";
import {
  modalcontext,
  modalcontextUpdate,
  modalContextDelete,
} from "../Context/modalcontext";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Propriétés par défaut (affichées au premier chargement)
const initialProperties = {
  1: {
    image: "./assets/images/property-01.jpg",
    boxe: [
      {
        title: "Luxury Villa",
        price: "$2.264.000",
        sub: "18 New Street Miami, OR 97219",
      },
    ],
    infos: [
      {
        Bedrooms: "8",
        Bathrooms: "8",
        Area: "545m2",
        Floor: "3",
        Parking: "6 spots",
      },
    ],
  },
  2: {
    image: "./assets/images/property-02.jpg",
    boxe: [
      {
        title: "Luxury Villa",
        price: "$1.180.000",
        sub: "54 Mid Street Florida, OR 27001",
      },
    ],
    infos: [
      {
        Bedrooms: "6",
        Bathrooms: "5",
        Area: "450m2",
        Floor: "3",
        Parking: "8 spots",
      },
    ],
  },
  3: {
    image: "./assets/images/property-03.jpg",
    boxe: [
      {
        title: "Luxury Villa",
        price: "$1.460.000",
        sub: "26 Old Street Miami, OR 38540",
      },
    ],
    infos: [
      {
        Bedrooms: "5",
        Bathrooms: "4",
        Area: "225m2",
        Floor: "3",
        Parking: "10 spots",
      },
    ],
  },
  4: {
    image: "./assets/images/property-04.jpg",
    boxe: [
      {
        title: "Apartment",
        price: "$584.500",
        sub: "12 New Street Miami, OR 12650",
      },
    ],
    infos: [
      {
        Bedrooms: "4",
        Bathrooms: "3",
        Area: "125m2",
        Floor: "25th",
        Parking: "2 cars",
      },
    ],
  },
  5: {
    image: "./assets/images/property-05.jpg",
    boxe: [
      {
        title: "Luxury Villa",
        price: "$925.600",
        sub: "34 Beach Street Miami, OR 42680",
      },
    ],
    infos: [
      {
        Bedrooms: "4",
        Bathrooms: "4",
        Area: "180m2",
        Floor: "38th",
        Parking: "2 cars",
      },
    ],
  },
  6: {
    image: "./assets/images/property-06.jpg",
    boxe: [
      {
        title: "Modern Condo",
        price: "$450.000",
        sub: "22 New Street Portland, OR 16540",
      },
    ],
    infos: [
      {
        Bedrooms: "3",
        Bathrooms: "2",
        Area: "165m2",
        Floor: "26th",
        Parking: "3 cars",
      },
    ],
  },
};

export default function Properties({ activeBtn }) {
  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem("properties");
    return saved ? JSON.parse(saved) : initialProperties;
  });

  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [propertyToEdit, setPropertyToEdit] = useState(null);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModalUpdate = () => setOpenModalUpdate(true);
  const handleCloseModalUpdate = () => setOpenModalUpdate(false);
  const handleOpenModalDelete = () => setOpenModalDelete(true);
  const handleCloseModalDelete = () => setOpenModalDelete(false);

  const addProperty = (newData) => {
    const newKey = Date.now().toString(); // 👈 تأكد أن المفتاح سترينغ
    const newProperty = {
      image: newData.image || "./assets/images/default.jpg",
      boxe: [
        {
          title: newData.type,
          price: newData.price,
          sub: newData.sub,
        },
      ],
      infos: [
        {
          Bedrooms: newData.Bedrooms,
          Bathrooms: newData.Bathrooms,
          Area: newData.Area,
          Floor: newData.Floor,
          Parking: newData.Parking,
        },
      ],
    };

    const updated = { ...properties, [newKey]: newProperty };
    setProperties(updated);
    localStorage.setItem("properties", JSON.stringify(updated));
  };

  const deleteProperty = (idToDelete) => {
    const updated = Object.fromEntries(
      Object.entries(properties).filter(([key]) => key !== idToDelete)
    );
    setProperties(updated);
    localStorage.setItem("properties", JSON.stringify(updated));
  };

  const filteredProperties = Object.entries(properties).filter(([_, det]) => {
    const title = det.boxe?.[0]?.title?.toLowerCase() || "";
    if (activeBtn === 1) return true;
    if (activeBtn === 2) return title.includes("apartment");
    if (activeBtn === 3) return title.includes("villa");
    if (activeBtn === 4) return title.includes("penthouse");
    return false;
  });

  return (
    <modalContextDelete.Provider
      value={{ openModalDelete, handleCloseModalDelete, handleOpenModalDelete }}
    >
      <modalcontext.Provider
        value={{ openModal, handleOpenModal, handleCloseModal }}
      >
        <modalcontextUpdate.Provider
          value={{
            openModalUpdate,
            handleOpenModalUpdate,
            handleCloseModalUpdate,
          }}
        >
          <Container maxWidth="lg">
            {/* Header */}
            <div className="flex flex-col items-center justify-center text-center py-16 sm:py-24">
              <Typography
                sx={{
                  color: "rgb(238, 77, 45)",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  letterSpacing: 1,
                  mb: 2,
                }}
              >
                | Properties
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.5rem",
                    md: "2.8rem",
                    lg: "3rem",
                  },
                  lineHeight: 1.3,
                  textAlign: "center",
                }}
              >
                We Provide The Best <br /> Property You Like
              </Typography>
              <button className="btn" onClick={handleOpenModal}>
                Add Propertie
              </button>
            </div>

            {/* Cards */}
            <Grid container spacing={4} justifyContent="center">
              <AnimatePresence>
                {filteredProperties.map(([key, det]) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={key}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: 360,
                          width: "100%",
                          borderRadius: 4,
                          boxShadow: 4,
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={det.image}
                            alt={det.boxe[0].title}
                            sx={{
                              height: 200,
                              objectFit: "cover",
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            }}
                          />
                          <CardContent sx={{ px: 3 }}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 1.5,
                              }}
                            >
                              <Typography
                                variant="caption"
                                sx={{
                                  backgroundColor: "#fde0dc",
                                  color: "rgb(238, 77, 45)",
                                  fontWeight: "bold",
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: "6px",
                                }}
                              >
                                {det.boxe[0].title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{ color: "#ee626b", fontWeight: "bold" }}
                              >
                                {det.boxe[0].price}
                              </Typography>
                            </Box>
                            <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                              {det.boxe[0].sub}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Bedrooms:</strong> {det.infos[0].Bedrooms}
                              &nbsp;&nbsp;
                              <strong>Bathrooms:</strong>{" "}
                              {det.infos[0].Bathrooms}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Area:</strong> {det.infos[0].Area}
                              &nbsp;&nbsp;
                              <strong>Floor:</strong> {det.infos[0].Floor}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                              <strong>Parking:</strong> {det.infos[0].Parking}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Divider />
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            pb: 2,
                          }}
                        >
                          <EditIcon
                            onClick={() => {
                              setSelectedId(key);
                              setPropertyToEdit(properties[key]);
                              handleOpenModalUpdate();
                            }}
                            sx={{
                              cursor: "pointer",
                              color: "#394DBF",
                              "&:hover": { color: "#4C65ED" },
                            }}
                          />
                          <Button
                            size="medium"
                            variant="contained"
                            sx={{
                              px: 4,
                              py: 1,
                              fontWeight: "bold",
                              borderRadius: "999px",
                              backgroundColor: "#000",
                              "&:hover": {
                                backgroundColor: "rgb(238, 77, 45)",
                                boxShadow: 4,
                              },
                            }}
                          >
                            Schedule a visit
                          </Button>
                          <DeleteIcon
                            onClick={() => {
                              setSelectedId(key);
                              handleOpenModalDelete();
                            }}
                            sx={{
                              cursor: "pointer",
                              color: "#BF3939",
                              "&:hover": { color: "red" },
                            }}
                          />
                        </CardActions>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </AnimatePresence>
            </Grid>

            {/* Modals */}
            <Modal addProperty={addProperty} />
            <ModifierModal
              selectedId={selectedId}
              propertyToEdit={propertyToEdit}
              updateProperty={(id, newData) => {
                const updated = {
                  ...properties,
                  [id]: {
                    image: newData.image || properties[id].image,
                    boxe: [
                      {
                        title: newData.type,
                        price: newData.price,
                        sub: newData.sub,
                      },
                    ],
                    infos: [
                      {
                        Bedrooms: newData.Bedrooms,
                        Bathrooms: newData.Bathrooms,
                        Area: newData.Area,
                        Floor: newData.Floor,
                        Parking: newData.Parking,
                      },
                    ],
                  },
                };
                setProperties(updated);
                localStorage.setItem("properties", JSON.stringify(updated));
              }}
            />
            <DeleteModal
              selectedId={selectedId}
              deleteProperty={deleteProperty}
            />
          </Container>
        </modalcontextUpdate.Provider>
      </modalcontext.Provider>
    </modalContextDelete.Provider>
  );
}
