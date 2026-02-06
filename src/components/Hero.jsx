import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HeroBanner() {
  return (
    <Box
      id="about"
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Building Production-Ready AI Systems
          <br />
          on a Full-Stack Foundation
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
        >
          Strong interest in AI/LLM integration with hands-on
          exposure to tools like ChatGPT, Gemini, and Zapier.
          Actively exploring RAG pipelines to combine LLM
          capabilities with external data sources for more
          accurate, context-aware responses. Eager to apply
          this knowledge in real-world applications. Known for
          being a fast learner with strong problem-solving
          skills, adaptability, and a solid foundation in full
          stack development.
        </Typography>
        {/* <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained">Call to Action</Button>
        </Box> */}
      </Container>
    </Box>
  );
}
