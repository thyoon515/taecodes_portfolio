import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const experiences = [
  {
    period: "May 2024 — Present",
    title: "Web Content Author / Front-End Developer",
    company: "HSAD (LG Electronics USA)",
    location: "Englewood Cliffs, NJ",
    highlights: [
      "Developed responsive landing pages for LG.com using HTML, CSS, and Bootstrap, ensuring consistent performance across devices and browsers.",
      "Translated Figma designs into pixel-perfect front-end implementations with interactive, accessible UI components.",
      "Collaborated with global content teams to migrate and manage website assets within ContentStack CMS, improving scalability and team workflow.",
      "Created and updated marketing and promotional pages daily in alignment with ongoing business initiatives and seasonal campaigns.",
    ],
    tags: ["AEO", "HTML", "Bootstrap", "Figma", "ContentStack", "Prompt Engineering", "ChatGPT", "Zapier", "React", "JavaScript", "Akeno PIM"],
  },
  {
    period: "March 2022 — Present",
    title: "Web Developer",
    company: "Way Maker NJ (Part-Time)",
    location: "Fairview, NJ",
    highlights: [
      "Designed, built, and maintained a responsive, SEO-friendly website, resulting in improved user engagement and retention.",
      "Built AI-assisted workflows by integrating ChatGPT and Zapier, automating repetitive operational tasks such as email generation, content suggestions, and data entry.",
      "Leveraged AI tools for code debugging, refactoring, and drafting technical documentation, accelerating development cycles.",
      "Actively researching and experimenting with RAG (Retrieval-Augmented Generation) pipelines and LLM APIs to prototype future enhancements.",
    ],
    tags: ["SEO", "Gemini", "React", "JavaScript", "Node.js", "Ruby on Rails", "RAG", "Vector Databases" , "LLM Integration", "LLM APIs" ],
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "text.primary",
          }}
        >
          EXPERIENCE
        </Typography>
        <Divider sx={{ my: 2.5, borderColor: "divider" }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {experiences.map((item) => (
            <Box
              key={`${item.title}-${item.company}`}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "160px 1fr" },
                gap: "40px",
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "text.secondary",
                  letterSpacing: "0.12em",
                  whiteSpace: "nowrap",
                }}
              >
                {item.period}
              </Typography>

              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.company} · {item.location}
                </Typography>

                <Box component="ul" sx={{ mt: 1.5, pl: 3, m: 0 }}>
                  {item.highlights.map((line) => (
                    <Box component="li" key={line} sx={{ mb: 1 }}>
                      <Typography variant="body1" color="text.secondary">
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {item.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 999,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                        color: (theme) => (theme.palette.mode === "dark" ? "rgb(88, 230, 206)" : "rgb(0, 121, 107)"),
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "rgba(13, 80, 96, 0.55)" : "rgba(0, 121, 107, 0.12)",
                        border: (theme) =>
                          theme.palette.mode === "dark" ? "1px solid rgba(88, 230, 206, 0.2)" : "1px solid rgba(0, 121, 107, 0.25)",
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
