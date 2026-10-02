# Product Brief (MVP)

## Who it's for
SMB owners and marketers who want scroll-stopping social posts, ads, and web banners from existing photos (products, team, listings, menus) without video skills.

## MVP user flow
1. Upload photo -> 2. Choose Instant effect or AI motion (with short prompt, e.g. "steam rising from coffee") -> 3. Preview -> 4. Download MP4/GIF (9:16, 1:1, 16:9).

## In scope
Upload, 6 instant presets, AI tier with 1 provider, aspect-ratio export, download, simple login, credit counter.
## Out of scope (v2)
Timeline editor, audio, batch jobs, team workspaces, brand kits, payments beyond a simple Stripe checkout.

## Success metrics
Upload-to-download under 60 s (Instant) / 3 min (AI); >60% of uploads reach download; AI cost per clip tracked and under your price per credit.

## Pricing logic (verify current vendor pricing before setting prices)
Price per credit = vendor cost per clip x 2-3 margin. Instant effects are near-zero cost: use them as the free tier to drive signups; AI clips are the paid upgrade.

## Key risks
Vendor cost spikes (adapter + caps), inappropriate/deepfake content (consent checkbox, moderation, labeling), slow jobs (async queue + status page), copyright on uploaded images (terms of use).
