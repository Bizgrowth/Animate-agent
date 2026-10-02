---
name: video-provider-adapter
description: Add, swap, or debug AI image-to-video vendors (Replicate, Runway, Luma, etc.) behind a common interface. Use for anything touching AI animation jobs, cost, or vendor APIs.
---
# Video provider adapter

Interface in `src/lib/providers/types.ts`:
`submit({imageUrl, prompt, durationSec, aspect}) -> {jobId}`, `status(jobId) -> queued|running|done|failed (+videoUrl, error)`, `estimateCost(params) -> cents`.

Steps for a new vendor:
1. Read the vendor's current API docs (WebFetch) - do not rely on memory for model names, params, or pricing.
2. Implement `src/lib/providers/<vendor>.ts`; register in `index.ts` selected by `AI_PROVIDER`.
3. Always keep the `mock` provider (returns a sample clip after 3 s) for dev/tests.
4. Jobs are async: store job row, use webhook if offered else poll every 5 s with backoff; timeout at 10 min.
5. Before submit: check daily cap and credits, show estimate. On failure: refund credit, log vendor error (no keys), show friendly message.
6. Download the finished video to our storage; vendor URLs expire.
Never expose vendor keys client-side. Add a note in `docs/` comparing the new vendor's cost/quality on 5 sample photos.
