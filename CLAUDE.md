# Project: Animate-agent
Photo-to-animation web app. Owner is non-technical: explain decisions in plain business language, keep code simple, and summarize what changed and how to test it after every task.

## Stack (do not change without asking)
- Next.js (App Router) + TypeScript + Tailwind
- Motion (`motion` package) for instant effects; FFmpeg (server-side) for MP4/GIF export
- AI tier via provider adapter in `src/lib/providers/` (never call a vendor API from UI code)
- Storage: local `./uploads` in dev; S3-compatible (e.g. Cloudflare R2/Supabase) in prod

@AGENTS.md

## Rules
- API keys live only in `.env.local` (see `.env.example`). Never commit secrets or log them.
- Validate uploads: JPG/PNG/WebP only, max 10 MB, strip EXIF location data.
- Every AI job: show cost estimate before running, enforce a per-user daily cap, handle failure with a clear message and refund of the credit.
- No faces of real people animated without a consent checkbox; add visible "AI-generated" label option.
- Small commits, one feature each. Run `npm run lint && npm run build` before committing.

## Skills available (in .claude/skills)
- `motion-presets`: add/modify instant effects
- `video-provider-adapter`: add or swap an AI image-to-video vendor
- `mvp-qa-checklist`: run before any release
