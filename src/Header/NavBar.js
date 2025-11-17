import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useLocation } from "react-router-dom";

const pages = ["Home", "Properties", "Property Details", "Contact Us"];
const settings = ["Profile", "Account"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getPageNameFromPath = (path) => {
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
        return "";
    }
  };

  const activePage = getPageNameFromPath(location.pathname);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        margin: "20px",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo grand écran */}
          <Typography
            variant="h4"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Villa
          </Typography>

          {/* Menu mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => {
                const path =
                  page === "Home"
                    ? "/"
                    : `/${page.toLowerCase().replace(/ /g, "-")}`;

                return (
                  <MenuItem
                    key={page}
                    component={Link}
                    to={path}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: activePage === page ? "#ff6600" : "#000",
                      fontWeight: activePage === page ? "bold" : "normal",
                      "&:hover": {
                        color: "#ff6600",
                      },
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Logo petit écran */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          {/* Menu desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "55px",
            }}
          >
            {pages.map((page) => {
              const path =
                page === "Home"
                  ? "/"
                  : `/${page.toLowerCase().replace(/ /g, "-")}`;

              return (
                <Button
                  key={page}
                  component={Link}
                  to={path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: activePage === page ? "#ff6600" : "#000",
                    fontWeight: activePage === page ? "bold" : "normal",
                    borderBottom:
                      activePage === page ? "2px solid #ff6600" : "none",
                    transition: "color 0.3s, border-bottom 0.3s",
                    "&:hover": {
                      color: "#ff6600",
                      borderBottom: "2px solid #ff6600",
                    },
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/assets/images/profile-user.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
