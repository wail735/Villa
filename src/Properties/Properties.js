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
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
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

const filterButtons = [
  { id: 1, label: "All" },
  { id: 2, label: "Apartment" },
  { id: 3, label: "Villa" },
  { id: 4, label: "Condo" },
  { id: 5, label: "Penthouse" },
];

const initialProperties = {
  1: {
    image: "./assets/images/property-01.jpg",
    badge: "featured",
    boxe: [{ title: "Luxury Villa", price: "$2,264,000", sub: "18 New Street Miami, OR 97219" }],
    infos: [{ Bedrooms: "8", Bathrooms: "8", Area: "545m²", Floor: "3", Parking: "6 spots" }],
  },
  2: {
    image: "./assets/images/property-02.jpg",
    badge: "new",
    boxe: [{ title: "Luxury Villa", price: "$1,180,000", sub: "54 Mid Street Florida, OR 27001" }],
    infos: [{ Bedrooms: "6", Bathrooms: "5", Area: "450m²", Floor: "3", Parking: "8 spots" }],
  },
  3: {
    image: "./assets/images/property-03.jpg",
    badge: null,
    boxe: [{ title: "Luxury Villa", price: "$1,460,000", sub: "26 Old Street Miami, OR 38540" }],
    infos: [{ Bedrooms: "5", Bathrooms: "4", Area: "225m²", Floor: "3", Parking: "10 spots" }],
  },
  4: {
    image: "./assets/images/property-04.jpg",
    badge: "new",
    boxe: [{ title: "Apartment", price: "$584,500", sub: "12 New Street Miami, OR 12650" }],
    infos: [{ Bedrooms: "4", Bathrooms: "3", Area: "125m²", Floor: "25th", Parking: "2 cars" }],
  },
  5: {
    image: "./assets/images/property-05.jpg",
    badge: null,
    boxe: [{ title: "Luxury Villa", price: "$925,600", sub: "34 Beach Street Miami, OR 42680" }],
    infos: [{ Bedrooms: "4", Bathrooms: "4", Area: "180m²", Floor: "38th", Parking: "2 cars" }],
  },
  6: {
    image: "./assets/images/property-06.jpg",
    badge: "featured",
    boxe: [{ title: "Modern Condo", price: "$450,000", sub: "22 New Street Portland, OR 16540" }],
    infos: [{ Bedrooms: "3", Bathrooms: "2", Area: "165m²", Floor: "26th", Parking: "3 cars" }],
  },
};

export default function Properties({ activeBtn }) {
  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem("properties");
    return saved ? JSON.parse(saved) : initialProperties;
  });

  const [activeFilter, setActiveFilter] = useState(activeBtn || 1);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
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

  const toggleFavorite = (key) => {
    const updated = favorites.includes(key)
      ? favorites.filter((f) => f !== key)
      : [...favorites, key];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const addProperty = (newData) => {
    const newKey = Date.now().toString();
    const newProperty = {
      image: newData.image || "./assets/images/default.jpg",
      badge: "new",
      boxe: [{ title: newData.type, price: newData.price, sub: newData.sub }],
      infos: [{
        Bedrooms: newData.Bedrooms, Bathrooms: newData.Bathrooms,
        Area: newData.Area, Floor: newData.Floor, Parking: newData.Parking,
      }],
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
    const sub = det.boxe?.[0]?.sub?.toLowerCase() || "";
    const query = searchQuery.toLowerCase();

    const matchesFilter =
      activeFilter === 1 ? true :
      activeFilter === 2 ? title.includes("apartment") :
      activeFilter === 3 ? title.includes("villa") :
      activeFilter === 4 ? title.includes("condo") :
      activeFilter === 5 ? title.includes("penthouse") : false;

    const matchesSearch = query === "" || title.includes(query) || sub.includes(query);
    return matchesFilter && matchesSearch;
  });

  return (
    <modalContextDelete.Provider
      value={{ openModalDelete, handleCloseModalDelete, handleOpenModalDelete }}
    >
      <modalcontext.Provider value={{ openModal, handleOpenModal, handleCloseModal }}>
        <modalcontextUpdate.Provider
          value={{ openModalUpdate, handleOpenModalUpdate, handleCloseModalUpdate }}
        >
          <Box sx={{ py: 10, background: "#fafafa" }}>
            <Container maxWidth="lg">
              {/* ── Section Header ── */}
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    color: "#ee4d2d",
                    mb: 1.5,
                  }}
                >
                  Our Portfolio
                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
                    color: "#0d0d0d",
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  Premium Properties{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #ee4d2d, #ff6b4a)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    You'll Love
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#6b7280",
                    fontSize: "1rem",
                    maxWidth: 480,
                    mx: "auto",
                    mb: 4,
                  }}
                >
                  Handpicked luxury properties for the most discerning buyers and investors.
                </Typography>

                {/* Search Bar */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 3,
                    position: "relative",
                    maxWidth: 420,
                    mx: "auto",
                  }}
                >
                  <SearchIcon
                    sx={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#9ca3af",
                      fontSize: "1.1rem",
                    }}
                  />
                  <input
                    className="search-input"
                    style={{ paddingLeft: "44px" }}
                    placeholder="Search by location or type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Box>

                {/* Filter Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  {filterButtons.map((btn) => (
                    <button
                      key={btn.id}
                      className={`filter-btn ${activeFilter === btn.id ? "active" : ""}`}
                      onClick={() => setActiveFilter(btn.id)}
                    >
                      {btn.label}
                    </button>
                  ))}
                </Box>

                {/* Results count */}
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#9ca3af",
                  }}
                >
                  {filteredProperties.length} propert{filteredProperties.length !== 1 ? "ies" : "y"} found
                </Typography>
              </Box>

              {/* ── Add Property Button ── */}
              <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                <button className="btn" onClick={handleOpenModal}>
                  + Add Property
                </button>
              </Box>

              {/* ── Property Cards ── */}
              <Grid container spacing={3} justifyContent="center">
                <AnimatePresence>
                  {filteredProperties.length === 0 ? (
                    <Grid item xs={12}>
                      <Box sx={{ textAlign: "center", py: 10 }}>
                        <Typography
                          sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.5rem",
                            color: "#9ca3af",
                          }}
                        >
                          No properties found
                        </Typography>
                        <Typography sx={{ fontFamily: "'Inter', sans-serif", color: "#d1d5db", mt: 1 }}>
                          Try adjusting your search or filter
                        </Typography>
                      </Box>
                    </Grid>
                  ) : (
                    filteredProperties.map(([key, det]) => (
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
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ duration: 0.4 }}
                          style={{ width: "100%", display: "flex", justifyContent: "center" }}
                        >
                          <Card
                            className="property-card"
                            sx={{
                              maxWidth: 370,
                              width: "100%",
                              borderRadius: "20px",
                              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                              overflow: "hidden",
                              border: "1px solid rgba(0,0,0,0.05)",
                              background: "#fff",
                            }}
                          >
                            {/* Image with overlay */}
                            <Box sx={{ position: "relative" }}>
                              <CardMedia
                                component="img"
                                image={det.image}
                                alt={det.boxe[0].title}
                                sx={{
                                  height: 220,
                                  objectFit: "cover",
                                }}
                              />
                              {/* Favorite button */}
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: 14,
                                  right: 14,
                                  background: "rgba(255,255,255,0.9)",
                                  backdropFilter: "blur(10px)",
                                  borderRadius: "50%",
                                  width: 36,
                                  height: 36,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  cursor: "pointer",
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                  transition: "all 0.2s ease",
                                  "&:hover": { transform: "scale(1.1)" },
                                }}
                                onClick={() => toggleFavorite(key)}
                              >
                                {favorites.includes(key) ? (
                                  <FavoriteIcon sx={{ fontSize: "1.1rem", color: "#ee4d2d" }} />
                                ) : (
                                  <FavoriteBorderIcon sx={{ fontSize: "1.1rem", color: "#9ca3af" }} />
                                )}
                              </Box>

                              {/* Badge */}
                              {det.badge && (
                                <Box sx={{ position: "absolute", top: 14, left: 14 }}>
                                  <span className={det.badge === "new" ? "badge-new" : "badge-featured"}>
                                    {det.badge === "new" ? "New" : "Featured"}
                                  </span>
                                </Box>
                              )}

                              {/* Price tag */}
                              <Box
                                sx={{
                                  position: "absolute",
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                                  p: "24px 16px 12px",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    color: "#fff",
                                    fontWeight: 800,
                                    fontSize: "1.3rem",
                                  }}
                                >
                                  {det.boxe[0].price}
                                </Typography>
                              </Box>
                            </Box>

                            <CardContent sx={{ px: 3, pt: 2.5, pb: 1.5 }}>
                              {/* Type badge */}
                              <Box
                                sx={{
                                  display: "inline-block",
                                  background: "rgba(238,77,45,0.08)",
                                  color: "#ee4d2d",
                                  borderRadius: "6px",
                                  px: 1.5,
                                  py: 0.4,
                                  mb: 1.5,
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.5px",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  {det.boxe[0].title}
                                </Typography>
                              </Box>

                              {/* Address */}
                              <Typography
                                sx={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "0.88rem",
                                  color: "#6b7280",
                                  mb: 2,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                }}
                              >
                                📍 {det.boxe[0].sub}
                              </Typography>

                              <Divider sx={{ mb: 2, borderColor: "rgba(0,0,0,0.06)" }} />

                              {/* Property Features Icons */}
                              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                  <BedIcon sx={{ fontSize: "1rem", color: "#9ca3af" }} />
                                  <Typography
                                    sx={{
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "0.82rem",
                                      color: "#374151",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {det.infos[0].Bedrooms} Beds
                                  </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                  <BathtubIcon sx={{ fontSize: "1rem", color: "#9ca3af" }} />
                                  <Typography
                                    sx={{
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "0.82rem",
                                      color: "#374151",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {det.infos[0].Bathrooms} Baths
                                  </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                  <SquareFootIcon sx={{ fontSize: "1rem", color: "#9ca3af" }} />
                                  <Typography
                                    sx={{
                                      fontFamily: "'Inter', sans-serif",
                                      fontSize: "0.82rem",
                                      color: "#374151",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {det.infos[0].Area}
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>

                            <Divider sx={{ borderColor: "rgba(0,0,0,0.05)" }} />

                            <CardActions sx={{ px: 3, py: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              {/* Edit & Delete */}
                              <Box sx={{ display: "flex", gap: 1 }}>
                                <Box
                                  onClick={() => {
                                    setSelectedId(key);
                                    setPropertyToEdit(properties[key]);
                                    handleOpenModalUpdate();
                                  }}
                                  sx={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "rgba(57,77,191,0.08)",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    "&:hover": { background: "rgba(57,77,191,0.15)", transform: "scale(1.05)" },
                                  }}
                                >
                                  <EditIcon sx={{ fontSize: "1rem", color: "#394DBF" }} />
                                </Box>
                                <Box
                                  onClick={() => {
                                    setSelectedId(key);
                                    handleOpenModalDelete();
                                  }}
                                  sx={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "rgba(191,57,57,0.08)",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    "&:hover": { background: "rgba(191,57,57,0.15)", transform: "scale(1.05)" },
                                  }}
                                >
                                  <DeleteIcon sx={{ fontSize: "1rem", color: "#BF3939" }} />
                                </Box>
                              </Box>

                              {/* Visit Button */}
                              <Button
                                size="small"
                                variant="contained"
                                sx={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 700,
                                  fontSize: "0.78rem",
                                  textTransform: "none",
                                  borderRadius: "50px",
                                  px: 2.5,
                                  py: 0.8,
                                  background: "linear-gradient(135deg, #ee4d2d, #c93d20)",
                                  boxShadow: "0 4px 12px rgba(238,77,45,0.3)",
                                  "&:hover": {
                                    background: "linear-gradient(135deg, #ff6b4a, #ee4d2d)",
                                    boxShadow: "0 6px 20px rgba(238,77,45,0.4)",
                                    transform: "translateY(-1px)",
                                  },
                                  transition: "all 0.25s ease",
                                }}
                              >
                                Schedule Visit
                              </Button>
                            </CardActions>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))
                  )}
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
                      badge: properties[id].badge,
                      boxe: [{ title: newData.type, price: newData.price, sub: newData.sub }],
                      infos: [{
                        Bedrooms: newData.Bedrooms, Bathrooms: newData.Bathrooms,
                        Area: newData.Area, Floor: newData.Floor, Parking: newData.Parking,
                      }],
                    },
                  };
                  setProperties(updated);
                  localStorage.setItem("properties", JSON.stringify(updated));
                }}
              />
              <DeleteModal selectedId={selectedId} deleteProperty={deleteProperty} />
            </Container>
          </Box>
        </modalcontextUpdate.Provider>
      </modalcontext.Provider>
    </modalContextDelete.Provider>
  );
}
