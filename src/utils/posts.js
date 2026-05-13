// src/utils/posts.js
// Loads all markdown posts from src/posts at build time using Vite's
// import.meta.glob. Parses YAML-style frontmatter without external deps
// so we don't pull in node-only packages like gray-matter.

const modules = import.meta.glob("../posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

/**
 * Minimal frontmatter parser. Supports:
 *   - string values:   key: "value"   or   key: value
 *   - numbers:         key: 12
 *   - inline arrays:   tags: ["a", "b"]
 *   - dates (kept as strings; we coerce to Date when needed)
 * Anything fancier (nested keys, multiline values) intentionally not supported.
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const [, fm, content] = match;
  const data = {};

  fm.split("\n").forEach((line) => {
    if (!line.trim() || line.trim().startsWith("#")) return;
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;

    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      // inline array
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      return;
    }

    // strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  });

  return { data, content: content.trim() };
}

/**
 * Derive a slug from a file path like "../posts/2026-05-12-weekly-builder-digest.md".
 * Returns "2026-05-12-weekly-builder-digest".
 */
function slugFromPath(path) {
  const filename = path.split("/").pop() || "";
  return filename.replace(/\.md$/, "");
}

function formatDate(d) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return String(d);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Build and sort posts once at module load.
const allPosts = Object.entries(modules)
  .filter(([path]) => {
    // Skip the README and any file that isn't a real post.
    const filename = path.split("/").pop() || "";
    return !/^readme/i.test(filename);
  })
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = slugFromPath(path);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      dateFormatted: formatDate(data.date),
      summary: data.summary || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      content,
    };
  })
  .sort((a, b) => {
    // newest first; fall back to slug compare
    const ta = new Date(a.date).getTime() || 0;
    const tb = new Date(b.date).getTime() || 0;
    if (tb !== ta) return tb - ta;
    return b.slug.localeCompare(a.slug);
  });

export function getAllPosts() {
  return allPosts;
}

export function getPostBySlug(slug) {
  return allPosts.find((p) => p.slug === slug) || null;
}
