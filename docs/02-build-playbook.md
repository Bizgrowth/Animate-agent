# Build Playbook: prompts to paste into Claude Code, in order
After each phase: run it, click through it, then say "commit this".

## Phase 1: Foundation
"Create the Next.js + TypeScript + Tailwind app per CLAUDE.md. Home page with photo upload (drag/drop), validation (type, 10 MB), EXIF stripping, and image preview. Add README run instructions."
**Done when:** you can upload and see a photo.

## Phase 2: Instant motion (use `motion-presets` skill)
"Add 6 presets (slow zoom in, zoom out, pan left/right, parallax float, gentle pulse, pop-in). Live preview with Motion, duration slider (2-8 s), aspect ratio picker (9:16, 1:1, 16:9)."
**Done when:** each preset previews smoothly.

## Phase 3: Export
"Add server export to MP4 and GIF with FFmpeg matching the previewed motion and aspect ratio. Download button, progress indicator."
**Done when:** downloaded file plays on your phone.

## Phase 4: AI animation (use `video-provider-adapter` skill)
"Create the provider interface and a `mock` provider first, then Replicate. Add prompt box, cost estimate, async job with status polling, failure handling, per-user daily cap."
**Done when:** a real photo animates end to end; mock works with no spend.

## Phase 5: Accounts, storage, deploy
"Add Supabase auth, jobs and credits tables, cloud storage, webhook for finished jobs, Sentry. Deploy to Vercel with env vars."

## Phase 6: Monetize and polish
"Add Stripe checkout for credit packs, usage dashboard, terms/consent checkbox, AI label option."

## Before launch
Run the `mvp-qa-checklist` skill: "Run the mvp-qa-checklist."
