// src/components/WhatsNewPost.jsx
import { useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getPostBySlug } from "../utils/posts";

const markdownComponents = {
  h1: ({ node, ...props }) => (
    <Typography
      variant="h4"
      component="h1"
      sx={{ fontWeight: 700, mt: 4, mb: 2, letterSpacing: "-0.01em" }}
      {...props}
    />
  ),
  h2: ({ node, ...props }) => (
    <Typography
      variant="h5"
      component="h2"
      sx={{
        fontWeight: 700,
        mt: 5,
        mb: 1.5,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: (theme) =>
          theme.palette.mode === "dark" ? "rgb(167, 139, 250)" : "primary.main",
      }}
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <Typography
      variant="h6"
      component="h3"
      sx={{ fontWeight: 700, mt: 3.5, mb: 1.25, lineHeight: 1.4 }}
      {...props}
    />
  ),
  h4: ({ node, ...props }) => (
    <Typography
      variant="subtitle1"
      component="h4"
      sx={{ fontWeight: 700, mt: 3, mb: 1 }}
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <Typography
      variant="body1"
      component="p"
      sx={{ mb: 2, lineHeight: 1.8, color: "text.primary" }}
      {...props}
    />
  ),
  a: ({ node, ...props }) => (
    <Link
      {...props}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      underline="hover"
      sx={{
        color: (theme) =>
          theme.palette.mode === "dark" ? "rgb(167, 139, 250)" : "primary.main",
        fontWeight: 500,
      }}
    />
  ),
  strong: ({ node, ...props }) => (
    <Box component="strong" sx={{ fontWeight: 700, color: "text.primary" }} {...props} />
  ),
  em: ({ node, ...props }) => (
    <Box component="em" sx={{ fontStyle: "italic", color: "text.secondary" }} {...props} />
  ),
  ul: ({ node, ...props }) => (
    <Box
      component="ul"
      sx={{ pl: 3, mb: 2, "& li": { mb: 0.75, lineHeight: 1.75 } }}
      {...props}
    />
  ),
  ol: ({ node, ...props }) => (
    <Box
      component="ol"
      sx={{ pl: 3, mb: 2, "& li": { mb: 0.75, lineHeight: 1.75 } }}
      {...props}
    />
  ),
  li: ({ node, ...props }) => (
    <Typography component="li" variant="body1" sx={{ color: "text.primary" }} {...props} />
  ),
  hr: () => (
    <Divider
      sx={{
        my: 4,
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.08)",
      }}
    />
  ),
  blockquote: ({ node, ...props }) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: (theme) =>
          theme.palette.mode === "dark"
            ? "3px solid rgba(167, 139, 250, 0.5)"
            : "3px solid",
        borderColor: "primary.main",
        pl: 2,
        ml: 0,
        my: 2,
        color: "text.secondary",
        fontStyle: "italic",
      }}
      {...props}
    />
  ),
  code: ({ inline, children, ...props }) => {
    if (inline) {
      return (
        <Box
          component="code"
          sx={{
            px: 0.75,
            py: 0.25,
            mx: 0.25,
            borderRadius: 0.75,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
            fontSize: "0.88em",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.06)",
            color: (theme) =>
              theme.palette.mode === "dark" ? "rgb(88, 230, 206)" : "rgb(0, 121, 107)",
          }}
          {...props}
        >
          {children}
        </Box>
      );
    }
    return (
      <Box
        component="pre"
        sx={{
          p: 2,
          my: 2,
          borderRadius: 1.5,
          overflow: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.04)",
          border: "1px solid",
          borderColor: "divider",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          fontSize: "0.85rem",
          lineHeight: 1.6,
        }}
      >
        <code {...props}>{children}</code>
      </Box>
    );
  },
};

export default function WhatsNewPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!post) {
    return (
      <Box sx={{ py: { xs: 6, md: 10 }, minHeight: "70vh" }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            Post not found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            We couldn't find the entry you're looking for.
          </Typography>
          <Button
            component={RouterLink}
            to="/whats-new"
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Back to What's New
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 5, md: 8 }, minHeight: "70vh" }}>
      <Container maxWidth="md">
        <Button
          component={RouterLink}
          to="/whats-new"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3, color: "text.secondary", textTransform: "none" }}
        >
          All entries
        </Button>

        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ letterSpacing: "0.1em" }}
        >
          {post.dateFormatted}
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.02em",
            mt: 0.5,
            mb: 1.5,
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </Typography>

        {post.summary && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, fontSize: "1.08rem", lineHeight: 1.7 }}
          >
            {post.summary}
          </Typography>
        )}

        {post.tags.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
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

        <Divider sx={{ mb: 4, borderColor: "divider" }} />

        <Box sx={{ maxWidth: "100%" }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
        </Box>

        <Divider sx={{ mt: 6, mb: 3, borderColor: "divider" }} />
        <Button
          component={RouterLink}
          to="/whats-new"
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          sx={{ textTransform: "none" }}
        >
          Back to all entries
        </Button>
      </Container>
    </Box>
  );
}
