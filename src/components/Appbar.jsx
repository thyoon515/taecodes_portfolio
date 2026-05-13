// src/components/Appbar.jsx
import * as React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
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
import taecodesLogo from "/cd_taecodes_icon_2.png";
import ThemeToggle from "./ThemeToggle";

// Each nav item can be a hash anchor on the home page OR a router path.
// `type: "hash"` items scroll to a section (navigating home first if needed).
// `type: "route"` items navigate to a real URL.
const pages = [
  { label: "Skills", type: "hash", target: "#about" },
  { label: "Projects", type: "hash", target: "#projects" },
  { label: "Experience", type: "hash", target: "#experience" },
  { label: "What's New?", type: "route", target: "/whats-new" },
  { label: "Contact", type: "hash", target: "#contact" },
];

export default function ResponsiveAppBar({
  mode = "dark",
  onToggleTheme = () => {},
}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Hash links need to work from any route. If we're already on "/", just
  // let the browser handle the anchor scroll. Otherwise navigate home with
  // the hash and let the browser scroll to the target after mount.
  const handleHashClick = (hash) => (event) => {
    handleCloseNavMenu();
    if (location.pathname !== "/") {
      event.preventDefault();
      navigate(`/${hash}`);
      // Defer until Home mounts; then scroll.
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
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
          {/* Logo — clicks return to home */}
          <RouterLink to="/" style={{ display: "inline-flex" }}>
            <img
              src={taecodesLogo}
              alt="taecodes logo"
              style={{ height: "2em", width: "auto" }}
            />
          </RouterLink>
          <Typography
            variant="h6"
            noWrap
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
          />

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
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
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => {
                if (page.type === "route") {
                  return (
                    <MenuItem
                      key={page.label}
                      onClick={handleCloseNavMenu}
                      component={RouterLink}
                      to={page.target}
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography sx={{ textAlign: "center" }}>{page.label}</Typography>
                    </MenuItem>
                  );
                }
                // hash item — link to "/" + hash so it works from any route
                return (
                  <MenuItem
                    key={page.label}
                    component="a"
                    href={`/${page.target}`}
                    onClick={handleHashClick(page.target)}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page.label}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Desktop nav links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              if (page.type === "route") {
                return (
                  <Button
                    key={page.label}
                    component={RouterLink}
                    to={page.target}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "text.primary", display: "block" }}
                  >
                    {page.label}
                  </Button>
                );
              }
              return (
                <Button
                  key={page.label}
                  component="a"
                  href={`/${page.target}`}
                  onClick={handleHashClick(page.target)}
                  sx={{ my: 2, color: "text.primary", display: "block" }}
                >
                  {page.label}
                </Button>
              );
            })}
          </Box>

          {/* Right side: theme toggle */}
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 1 }}>
            <ThemeToggle mode={mode} onToggle={onToggleTheme} />
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
