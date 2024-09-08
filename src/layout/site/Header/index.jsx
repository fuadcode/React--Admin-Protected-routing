import React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const pages = ["Products", "Pricing", "Blog"];

const HeaderSite = () => {
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              App
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            App
          </Typography>

          <Link to={"/"} style={{ color: "white", marginLeft: "10px" }}>
            Home
          </Link>
          <Link to={"/about"} style={{ color: "white", marginLeft: "10px" }}>
            About
          </Link>
          <Link to={"/products"} style={{ color: "white", marginLeft: "10px" }}>
            Product
          </Link>
          <Link to={"/contact"} style={{ color: "white", marginLeft: "10px" }}>
            Contact
          </Link>
          <Link to={"/login"} style={{ color: "white", marginLeft: "10px" }}>
            Login
          </Link>
          <Link to={"/register"} style={{ color: "white", marginLeft: "10px" }}>
            Register
          </Link>
          <Link to={"admin/dashboard"} style={{ color: "white", marginLeft: "10px" }}>
            Admin
          </Link>
          <button
            onClick={() => i18n.changeLanguage("az")}
            style={{
              color: "white",
              backgroundColor: "#1976d2",
              marginLeft: "10px",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1976d2")}
          >
            AZ
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            style={{
              color: "white",
              backgroundColor: "#1976d2",
              marginLeft: "10px",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1976d2")}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("ru")}
            style={{
              color: "white",
              backgroundColor: "#1976d2",
              marginLeft: "10px",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1976d2")}
          >
            RU
          </button>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderSite;
