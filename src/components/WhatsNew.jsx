// src/components/WhatsNew.jsx
import { Link as RouterLink } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getAllPosts } from "../utils/posts";

export default function WhatsNew() {
  const ref = useReveal();
  const posts = getAllPosts();

  return (
    <Box
      ref={ref}
      id="whats-new"
      className="reveal"
      sx={{ py: { xs: 6, md: 10 }, minHeight: "70vh" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, letterSpacing: "0.08em", color: "text.primary" }}
        >
          WHAT'S NEW?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, mb: 1, maxWidth: 720 }}>
          A weekly digest of what I'm building, learning, and watching in AI,
          dev tooling, and the indie operator space. New entries each Monday.
        </Typography>
        <Divider sx={{ my: 2.5, borderColor: "divider" }} />

        {posts.length === 0 ? (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            No posts yet — check back Monday.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} key={post.slug}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderColor: "divider",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.02)",
                    transition: "border-color 0.2s, transform 0.2s",
                    "&:hover": {
                      borderColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(167,139,250,0.5)"
                          : "primary.main",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CardActionArea
                    component={RouterLink}
                    to={`/whats-new/${post.slug}`}
                    sx={{ height: "100%", alignItems: "stretch" }}
                  >
                    <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="overline"
                        color="text.secondary"
                        sx={{ letterSpacing: "0.1em" }}
                      >
                        {post.dateFormatted}
                      </Typography>
                      <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5, mb: 1 }}>
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, mb: 2, flexGrow: 1 }}
                      >
                        {post.summary}
                      </Typography>
                      {post.tags.length > 0 && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {post.tags.map((tag) => (
                            <Box
                              key={tag}
                              sx={{
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 999,
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                letterSpacing: "0.02em",
                                color: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "rgb(88, 230, 206)"
                                    : "rgb(0, 121, 107)",
                                backgroundColor: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "rgba(13, 80, 96, 0.55)"
                                    : "rgba(0, 121, 107, 0.12)",
                                border: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "1px solid rgba(88, 230, 206, 0.2)"
                                    : "1px solid rgba(0, 121, 107, 0.25)",
                              }}
                            >
                              {tag}
                            </Box>
                          ))}
                        </Box>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
