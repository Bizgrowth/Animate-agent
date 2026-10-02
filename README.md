# Animate-agent

Upload a photo, pick a motion style, get a short animated clip (MP4/GIF). Built with Claude Code.

## Two animation tiers
| Tier | What it does | Cost | Tool |
|---|---|---|---|
| **Instant** | Pan/zoom ("Ken Burns"), parallax, floating, pulse on the photo | ~Free (runs in browser) | Motion (motion.dev) + FFmpeg export |
| **AI** | True animation (hair moves, water flows, camera orbits) from a text prompt | Pay per clip | Image-to-video API behind a swappable adapter (Replicate, Runway, Luma, etc.) |

## How to use this kit
1. Read `docs/00-product-brief.md` (scope, users, costs) and `docs/01-tools-and-accounts.md` (sign-ups).
2. Open this repo in Claude Code. `CLAUDE.md` and `.claude/skills/` load automatically.
3. Follow `docs/02-build-playbook.md`: paste each phase prompt in order, test, commit.
