import React, { useEffect, useMemo, useRef, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AppBar from "./components/Appbar.jsx";
import HeroBanner from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";

import ReactLogo from "./assets/react.svg?react";
import viteLogo from "/vite.svg";
import taecodesLogo from "/cd_taecodes_icon_2.png";

import "./App.css";
import { getDesignTokens } from "./theme";

function App() {
  const greeting = import.meta.env.VITE_GREETING;
  const [count, setCount] = useState(0);
  const [ipAddress, setIpAddress] = useState("");

  /* Theme persistence */
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("taecodes-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("taecodes-theme", mode);
    } catch {}
  }, [mode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const toggleTheme = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  useEffect(() => {
    const fetchIpAddress = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        setIpAddress("API URL not configured");
        return;
      }
      try {
        const response = await fetch(`${apiUrl}?format=json`);
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
        setIpAddress("Unable to fetch IP address");
      }
    };
    fetchIpAddress();
  }, []);

  const useInView = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.2, ...options }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [options]);

    return [ref, isVisible];
  };

  const [heroRef, heroVisible] = useInView({ rootMargin: "0px 0px -10% 0px" });
  const [aboutRef, aboutVisible] = useInView({ rootMargin: "0px 0px -10% 0px" });
  const [experienceRef, experienceVisible] = useInView({ rootMargin: "0px 0px -10% 0px" });
  const [logosRef, logosVisible] = useInView({ rootMargin: "0px 0px -10% 0px" });
  const [footerRef, footerVisible] = useInView({ rootMargin: "0px 0px -10% 0px" });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* AppBar receives mode & toggle handler */}
      <AppBar mode={mode} onToggleTheme={toggleTheme} />

      <Container maxWidth={false} sx={{ px: 2, pt: 10 }}>
        <Header />
        <Box ref={heroRef} className={`reveal ${heroVisible ? "is-visible" : ""}`}>
          <HeroBanner />
        </Box>
        <Box ref={aboutRef} className={`reveal ${aboutVisible ? "is-visible" : ""}`}>
          <About />
        </Box>
        <Box ref={experienceRef} className={`reveal ${experienceVisible ? "is-visible" : ""}`}>
          <Experience />
        </Box>
        <Box ref={logosRef} className={`reveal ${logosVisible ? "is-visible" : ""}`}>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <a href="https://vite.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <ReactLogo className="logo react" alt="React logo" />
            </a>
            <a href="https://taecodes.com" target="_blank" rel="noreferrer">
              <img src={taecodesLogo} className="logo taecodes" alt="taecodes logo" />
            </a>
          </Box>

        {/* <div className="card">
          <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div> */}

        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

        </Box>
        <Box ref={footerRef} className={`reveal ${footerVisible ? "is-visible" : ""}`}>
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
