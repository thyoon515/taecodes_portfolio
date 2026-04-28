import { useReveal } from "../hooks/useReveal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [
  {
    title: "taecodes Portfolio",
    description:
      "This portfolio site — a full-stack application built with React + Vite on the frontend and Ruby on Rails as the API backend, containerized with Docker Compose and deployed via Render.",
    tags: ["React", "Vite", "Ruby on Rails", "Docker", "MUI"],
    github: "https://github.com/thyoon515/taecodes_portfolio",
    live: "https://taecodes.com",
  },
  {
    title: "Build-A-Habit",
    description:
      "A full-stack habit tracking app where users create and manage scheduled tasks to build daily routines. Features user authentication, a calendar interface, and full CRUD with four interconnected models.",
    tags: ["React", "Ruby on Rails", "PostgreSQL", "MUI", "FullCalendar", "BCrypt"],
    github: "https://github.com/thyoon515/build-a-habit",
    live: null,
  },
  {
    title: "Easy Sell Easy Buy",
    description:
      "A single-page NYC marketplace app where users can post, browse, and manage items for sale filtered by borough. Includes secure authentication, RESTful API, and location-based browsing.",
    tags: ["React", "Ruby on Rails", "PostgreSQL", "MUI", "BCrypt", "React Router"],
    github: "https://github.com/thyoon515/easy-sell-easy-buy",
    live: null,
  },
  {
    title: "Locate Zipcode",
    description:
      "A React SPA that lets authenticated users look up the city and state for any US zip code using the Zippopotam.us public API. Built with user auth and mock data persistence.",
    tags: ["React", "JavaScript", "MUI", "REST API", "json-server"],
    github: "https://github.com/thyoon515/phase-2-project",
    live: null,
  },
  {
    title: "Cocktail Recipe Finder",
    description:
      "A vanilla JS single-page app to discover cocktail recipes — search by name or hit 'Surprise Me!' for a random recipe, powered by TheCocktailDB public API.",
    tags: ["JavaScript", "HTML", "CSS", "jQuery", "TheCocktailDB API"],
    github: "https://github.com/thyoon515/phase-1-project",
    live: null,
  },
];

export default function Projects() {
  const ref = useReveal();
  return (
    <Box ref={ref} id="projects" className="reveal" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, letterSpacing: "0.08em", color: "text.primary" }}
        >
          PROJECTS
        </Typography>
        <Divider sx={{ my: 2.5, borderColor: "divider" }} />

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} key={project.title}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "divider",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.02)",
                  transition: "border-color 0.2s, transform 0.2s",
                  "&:hover": {
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "rgba(167,139,250,0.5)" : "primary.main",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tags.map((tag) => (
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
                            theme.palette.mode === "dark" ? "rgb(88, 230, 206)" : "rgb(0, 121, 107)",
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
                </CardContent>

                {(project.github || project.live) && (
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    {project.github && (
                      <Tooltip title="View on GitHub">
                        <IconButton
                          size="small"
                          component="a"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                    {project.live && (
                      <Tooltip title="View live site">
                        <IconButton
                          size="small"
                          component="a"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live site"
                          sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
                        >
                          <ExternalLinkIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
