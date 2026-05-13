# Weekly Digest Posts

Drop one markdown file per digest in this folder. The blog auto-discovers
them at build time via Vite's `import.meta.glob`, so **no code changes are
needed when adding a new post**.

## Filename convention

```
YYYY-MM-DD-short-slug.md
```

The filename (minus `.md`) becomes the URL: `/whats-new/<filename>`.

Example: `2026-05-12-weekly-builder-digest.md` → `/whats-new/2026-05-12-weekly-builder-digest`

## Required frontmatter

Every post must start with a YAML frontmatter block:

```yaml
---
title: "Weekly Builder Digest — May 12, 2026"
date: 2026-05-12
summary: "One-line teaser shown on the index card."
tags: ["AI", "Dev Tools", "Agency", "Weekly Digest"]
---
```

| Field     | Required | Notes                                                 |
| --------- | -------- | ----------------------------------------------------- |
| `title`   | yes      | Shown on the index card and as H1 on the detail page  |
| `date`    | yes      | `YYYY-MM-DD`. Drives sort order (newest first).       |
| `summary` | yes      | Shown on the index card. Keep to 1–2 sentences.       |
| `tags`    | no       | Inline array. Shown as chips on the card and post.    |

## Workflow for the scheduled Cowork task

The scheduled "Weekly Digest" task should write its output directly to
this folder using the filename convention above. Once the file lands:

```bash
git add src/posts/<new-file>.md
git commit -m "Add weekly digest: <date>"
git push
```

Render will auto-deploy. New post is live in ~2 minutes.

## Markdown features supported

- Standard markdown via `react-markdown` + `remark-gfm`
- `#`/`##`/`###` headings → MUI-styled with theme-aware colors
- Inline code (`` `code` ``) and fenced code blocks (```)
- Links (external links auto-open in new tab)
- Lists, blockquotes, horizontal rules
- GFM tables, task lists, strikethrough
