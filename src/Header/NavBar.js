import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const pages = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "Property Details", path: "/property-details" },
  { label: "Contact Us", path: "/contact-us" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  // Glassmorphism effect on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const activePath = location.pathname;

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ position: "sticky", top: 0, zIndex: 1200 }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.92)"
            : "rgba(255, 255, 255, 1)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          color: "#0d0d0d",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0, 0, 0, 0.08)"
            : "0 1px 0 rgba(0,0,0,0.06)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1, minHeight: "70px" }}>

            {/* ── Logo Desktop ── */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
                mr: 4,
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #ee4d2d, #c93d20)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(238,77,45,0.35)",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    lineHeight: 1,
                  }}
                >
                  V
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#0d0d0d",
                    letterSpacing: "-0.3px",
                    lineHeight: 1,
                  }}
                >
                  Villa
                  <Box component="span" sx={{ color: "#ee4d2d" }}>Agency</Box>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    color: "#9ca3af",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  Luxury Real Estate
                </Typography>
              </Box>
            </Box>

            {/* ── Mobile Hamburger ── */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ color: "#0d0d0d" }}
              >
                {anchorElNav ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: "16px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    minWidth: 220,
                    py: 1,
                  },
                }}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{
                      py: 1.2,
                      px: 3,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: activePath === page.path ? 700 : 500,
                      color: activePath === page.path ? "#ee4d2d" : "#1a1a2e",
                      borderLeft: activePath === page.path ? "3px solid #ee4d2d" : "3px solid transparent",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#ee4d2d",
                        backgroundColor: "rgba(238,77,45,0.05)",
                      },
                    }}
                  >
                    {page.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* ── Logo Mobile ── */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #ee4d2d, #c93d20)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "1rem" }}
                >
                  V
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#0d0d0d",
                }}
              >
                Villa<Box component="span" sx={{ color: "#ee4d2d" }}>Agency</Box>
              </Typography>
            </Box>

            {/* ── Desktop Menu Links ── */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              {pages.map((page) => {
                const isActive = activePath === page.path;
                return (
                  <Button
                    key={page.label}
                    component={Link}
                    to={page.path}
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "0.88rem",
                      color: isActive ? "#ee4d2d" : "#1a1a2e",
                      px: 2,
                      py: 1,
                      borderRadius: "50px",
                      backgroundColor: isActive ? "rgba(238,77,45,0.08)" : "transparent",
                      letterSpacing: "0.3px",
                      transition: "all 0.25s ease",
                      textTransform: "none",
                      "&:hover": {
                        color: "#ee4d2d",
                        backgroundColor: "rgba(238,77,45,0.06)",
                      },
                    }}
                  >
                    {page.label}
                  </Button>
                );
              })}
            </Box>

            {/* ── CTA Button ── */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                component={Link}
                to="/contact-us"
                variant="contained"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textTransform: "none",
                  borderRadius: "50px",
                  px: 2.5,
                  py: 1,
                  background: "linear-gradient(135deg, #ee4d2d, #c93d20)",
                  boxShadow: "0 4px 15px rgba(238,77,45,0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #ff6b4a, #ee4d2d)",
                    boxShadow: "0 6px 20px rgba(238,77,45,0.45)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}

export default NavBar;
