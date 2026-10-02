---
name: mvp-qa-checklist
description: Pre-release quality, security, and cost checklist for the photo animation app. Use before deploying or when asked to review launch readiness.
---
# MVP QA checklist
Run each item, report PASS/FAIL in a table with a plain-English fix for each FAIL.
- Upload: rejects wrong type, >10 MB, corrupt file; EXIF/GPS stripped
- Presets: all 6 x 3 aspect ratios, portrait + landscape, no blank edges
- Export: MP4 plays on iPhone and Android; GIF under 15 MB
- AI: mock + real provider succeed; failure shows message and refunds credit; cap enforced
- Security: no secrets in repo (`git grep -i "token\|secret\|key"`), rate limiting, auth on all job endpoints, users only see own files
- Cost: spend caps set at vendor; cost per clip logged
- Legal: consent checkbox, terms, AI-label option, takedown contact
- Performance: `npm run build` clean; Instant export < 60 s
