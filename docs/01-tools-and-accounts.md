# Tools & Accounts to Set Up

| Purpose | Tool | Needed when | Notes |
|---|---|---|---|
| Build | Claude Code | Day 1 | Already in use |
| Code hosting | GitHub (this repo) | Day 1 | |
| Instant motion | Motion (motion.dev) | Phase 2 | Open source, no account |
| Video export | FFmpeg | Phase 3 | Free; installed on server |
| AI animation | Replicate (start here) or Runway / Luma | Phase 4 | Create account, add spend limit ($20) first. Compare current per-clip price and quality on 5 of your own photos before committing |
| Hosting | Vercel | Phase 5 | Long AI jobs need a queue/webhook, not one request |
| File storage | Cloudflare R2 or Supabase Storage | Phase 5 | |
| Auth + DB | Supabase | Phase 5 | Users, credits, jobs table |
| Payments | Stripe | Phase 6 | After free beta |
| Error tracking | Sentry | Phase 5 | Free tier |

Tip: always set a monthly spend cap in every vendor dashboard.
Note: "motion tool" may also mean After Effects/Rive/Lottie. Those are for designed vector animation, not photos; if you meant one of them, tell Claude Code and Phase 2 will be adapted.
