// src/components/WhatsNewBanner.jsx
import { Link as RouterLink } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getAllPosts } from "../utils/posts";

export default function WhatsNewBanner() {
  const ref = useReveal();
  const latest = getAllPosts()[0];

  return (
    <Box
      ref={ref}
      className="reveal"
      sx={{ py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 7 },
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(167, 139, 250, 0.25)"
                : "rgba(109, 40, 217, 0.2)",
            background: (theme) =>
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(167,139,250,0.10) 0%, rgba(13,80,96,0.18) 100%)"
                : "linear-gradient(135deg, rgba(109,40,217,0.06) 0%, rgba(0,121,107,0.08) 100%)",
          }}
        >
          {/* Decorative gradient orb */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: -120,
              right: -120,
              width: 360,
              height: 360,
              borderRadius: "50%",
              filter: "blur(60px)",
              opacity: 0.35,
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? "radial-gradient(circle, #a78bfa 0%, transparent 70%)"
                  : "radial-gradient(circle, #6d28d9 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <Box sx={{ position: "relative", maxWidth: 720 }}>
            {/* Weekly badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: (theme) =>
                  theme.palette.mode === "dark" ? "rgb(88, 230, 206)" : "rgb(0, 121, 107)",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(13, 80, 96, 0.55)"
                    : "rgba(0, 121, 107, 0.12)",
                border: (theme) =>
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(88, 230, 206, 0.3)"
                    : "1px solid rgba(0, 121, 107, 0.3)",
                mb: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "rgb(88, 230, 206)" : "rgb(0, 121, 107)",
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 0 8px rgba(88,230,206,0.8)"
                      : "0 0 6px rgba(0,121,107,0.6)",
                }}
              />
              New every Monday
            </Box>

            {/* Headline */}
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                fontSize: { xs: "1.9rem", sm: "2.4rem", md: "2.8rem" },
                mb: 1.5,
              }}
            >
              <Box
                component="span"
                sx={{
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)"
                      : "linear-gradient(135deg, #213547 0%, #6d28d9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Grow and Learn With Tae
              </Box>
            </Typography>

            {/* Subtext */}
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
                mb: 1,
                maxWidth: 620,
              }}
            >
              A weekly digest on what's shipping in AI, dev tooling, and the
              indie operator space — plus what I'd actually do about it this
              week.
            </Typography>

            {/* Latest post teaser (optional, hidden if no posts) */}
            {latest && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  mb: 3,
                  color: "text.secondary",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                Latest: <Box component="span" sx={{ color: "text.primary", fontStyle: "normal", fontWeight: 600 }}>{latest.title}</Box>
              </Typography>
            )}

            {/* CTA */}
            <Button
              component={RouterLink}
              to="/whats-new"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: latest ? 0 : 3,
                px: 3,
                py: 1.25,
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: 2,
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #a78bfa 0%, #6d28d9 100%)"
                    : "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)",
                boxShadow: (theme) =>
                  theme.palette.mode === "dark"
                    ? "0 8px 24px rgba(167, 139, 250, 0.25)"
                    : "0 8px 24px rgba(109, 40, 217, 0.25)",
                "&:hover": {
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #b59cfc 0%, #7c3aed 100%)"
                      : "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                  transform: "translateY(-1px)",
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 10px 28px rgba(167, 139, 250, 0.35)"
                      : "0 10px 28px rgba(109, 40, 217, 0.35)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Check out what's new this week!
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
