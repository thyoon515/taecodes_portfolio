import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Appbar from "./components/Appbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsNew from "./components/WhatsNew";
import WhatsNewPost from "./components/WhatsNewPost";
import WhatsNewBanner from "./components/WhatsNewBanner";

function Home() {
  return (
    <>
      <Hero />
      <WhatsNewBanner />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark" && {
            background: { default: "#0f0f0f", paper: "#141414" },
          }),
        },
      }),
    [mode]
  );

  const handleToggleTheme = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Appbar mode={mode} onToggleTheme={handleToggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whats-new" element={<WhatsNew />} />
            <Route path="/whats-new/:slug" element={<WhatsNewPost />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
