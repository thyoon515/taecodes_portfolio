// src/components/Appbar.jsx
import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
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
import taecodesLogo from "/cd_taecodes_icon_2.png";
import ThemeToggle from "./ThemeToggle"; // make sure this exists

const pages = ["Skills", "Experience"];
const pageLinks = {
  Skills: "#about",
  Experience: "#experience",
};
export default function ResponsiveAppBar({
  mode = "dark",
  onToggleTheme = () => {},
}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <a href="https://taecodes.com" target="_blank" rel="noreferrer">
            <img src={taecodesLogo} className="logo taecodes" alt="taecodes logo" />
          </a>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".05em",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar-nav"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar-nav"
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
              {pages.map((page) => {
                const href = pageLinks[page];
                return (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    component={href ? "a" : "li"}
                    href={href}
                    sx={href ? { textDecoration: "none", color: "inherit" } : undefined}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Mobile monospace icon + title */}
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
              letterSpacing: ".05em",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          {/* Desktop nav links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              const href = pageLinks[page];
              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={href ? "a" : "button"}
                  href={href}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* Right side: theme toggle */}
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 1 }}>
            {/* Theme toggle receives mode and calls onToggleTheme */}
            <ThemeToggle mode={mode} onToggle={onToggleTheme} />
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
