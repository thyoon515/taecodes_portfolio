import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/thyoon515",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/developer-tae",
    icon: <LinkedInIcon />,
  },
  {
    label: "Email",
    href: "mailto:devtae10@gmail.com",
    icon: <EmailIcon />,
  },
];

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="overline"
          sx={{ color: "primary.main", letterSpacing: "0.15em", fontWeight: 600 }}
        >
          Get In Touch
        </Typography>

        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mt: 1, mb: 2 }}
        >
          Let's Work Together
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 5, maxWidth: 480, mx: "auto" }}
        >
          I'm open to full-time roles, freelance projects, and collaborations —
          especially in applied AI, full-stack web, or anything at that
          intersection. Drop me a line and I'll get back to you quickly.
        </Typography>

        <Link
          href="mailto:devtae10@gmail.com"
          underline="none"
          sx={{
            display: "inline-block",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 700,
            fontSize: "0.95rem",
            backgroundColor: "primary.main",
            color: "#fff",
            transition: "opacity 0.2s, transform 0.2s",
            "&:hover": { opacity: 0.85, transform: "translateY(-2px)" },
          }}
        >
          Say Hello →
        </Link>

        <Divider sx={{ my: 6, borderColor: "divider" }} />

        <Stack direction="row" spacing={1} justifyContent="center">
          {socials.map(({ label, href, icon }) => (
            <Tooltip key={label} title={label}>
              <IconButton
                component="a"
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "text.primary", transform: "translateY(-2px)" },
                  transition: "color 0.2s, transform 0.2s",
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>

        <Typography variant="caption" color="text.disabled" sx={{ display: "block", mt: 3 }}>
          devtae10@gmail.com · Elizabeth, NJ · taecodes.com
        </Typography>
      </Container>
    </Box>
  );
}
