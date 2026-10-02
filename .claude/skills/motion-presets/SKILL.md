---
name: motion-presets
description: Add or modify instant (non-AI) photo motion effects such as zoom, pan, parallax, pulse, and their FFmpeg export equivalents. Use when working on preview animations or presets.
---
# Motion presets

Each preset is ONE definition in `src/lib/presets/<name>.ts` exporting:
`{ id, label, durationDefault, motionKeyframes (for Motion preview), ffmpegFilter(width,height,duration,fps) }`

Steps to add a preset:
1. Define keyframes (scale, x, y, rotate, opacity) as start->end values, easing `easeInOut`.
2. Write the matching FFmpeg `zoompan`/`crop`/`overlay` filter so export matches preview.
3. Register in `src/lib/presets/index.ts`.
4. Test with portrait and landscape photos at all 3 aspect ratios; edges must never show blank space (scale >= 1.1 when panning).
Rules: 30 fps, 2-8 s, loopable presets end where they start. Respect `prefers-reduced-motion` in preview. Keep presets subtle: big motion looks cheap.
