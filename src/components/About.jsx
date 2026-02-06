import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

// About.jsx — MUI Version with continuous marquee animation
// "Who's Tae?" section with short bio and a right-to-left moving tech stack carousel

export default function About() {
  const techStacks = [
    { id: 'javascript', label: 'JavaScript', icon: '🟨' },
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'ruby', label: 'Ruby', icon: '💎' },
    { id: 'rails', label: 'Rails', icon: '🚉' },
    { id: 'llm', label: 'LLM', icon: '🖤' },
    { id: 'git', label: 'Git', icon: '🔧' },
    { id: 'docker', label: 'Docker', icon: '🐳' },
    { id: 'zapier', label: 'Zapier', icon: '⚡' },
    { id: 'postman', label: 'Postman', icon: '📮' },
    { id: 'rag', label: 'RAG', icon: '🧩' },
    { id: 'vite', label: 'Vite', icon: '⚡' },
    { id: 'html', label: 'HTML', icon: '🌐' },
    { id: 'figma', label: 'Figma', icon: '🎨' }
  ];

  // Duplicate the array so the marquee can loop seamlessly
  const marqueeItems = [...techStacks, ...techStacks];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: 'background.default',
        color: 'text.primary',
        textAlign: 'center',
        borderBottom: (theme) =>
          theme.palette.mode === 'light' ? '1px solid rgba(15, 23, 42, 0.12)' : 'none',
      }}
    >
      <Box maxWidth="md" mx="auto" px={3}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Current Skill Set & Actively Developing Capabilities
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.7 }}>
          I work across the full stack using React, Node.js, and Ruby on Rails, with hands-on experience in production front-end systems, CMS-driven workflows, and AI-assisted automation. Alongside my core stack, I’m actively developing applied AI skills including RAG pipelines, prompt engineering, fine-tuning, and vector databases to build more intelligent, scalable systems.
        </Typography>

        {/* Marquee-style Tech Stack (no scrollbar) */}
        <Box
          sx={{
            width: '100%',
            overflow: 'hidden', // hide scrollbar and clipped content
            // Define keyframes for marquee animation
            '@keyframes marquee': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            // outer container for the moving row
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              display: 'flex',
              // Make the inner container twice the width so translateX(-50%) shows second half
              width: '200%',
              // Use the marquee animation: slower speed for subtle movement
              animation: 'marquee 28s linear infinite',
              // Prevent users from selecting text while it moves
              userSelect: 'none',
            }}
          >
            {marqueeItems.map((tech, idx) => (
              <Paper
                key={`${tech.id}-${idx}`}
                elevation={3}
                sx={{
                  flex: '0 0 auto',
                  width: 110,
                  p: 2,
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  boxShadow: (theme) => (theme.palette.mode === 'light' ? 'none' : theme.shadows[3]),
                  border: (theme) => (theme.palette.mode === 'light' ? '1px solid rgba(15, 23, 42, 0.08)' : 'none'),
                }}
              >
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {tech.icon}
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {tech.label}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
