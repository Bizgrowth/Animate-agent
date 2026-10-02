// Instant motion presets. Values are plain data so the same definition can later
// drive the FFmpeg export (Phase 3) and stay identical to the live preview.
// x / y are percentages of the frame; scale 1 = photo fills the frame.
// Moving presets stay at scale >= 1.1 so blank edges never show.

export type Keyframes = { scale: number[]; x: number[]; y: number[]; opacity: number[] };

export type Preset = {
  id: string;
  label: string;
  description: string;
  defaultSeconds: number;
  /** "reverse" plays back and forth (smooth loop); "restart" replays from the start. */
  loop: "reverse" | "restart";
  keyframes: Keyframes;
};

export const PRESETS: Preset[] = [
  { id: "zoom-in", label: "Slow zoom in", description: "Gently pushes in toward the subject.",
    defaultSeconds: 5, loop: "restart",
    keyframes: { scale: [1, 1.25], x: [0, 0], y: [0, 0], opacity: [1, 1] } },
  { id: "zoom-out", label: "Zoom out", description: "Starts close and reveals the whole photo.",
    defaultSeconds: 5, loop: "restart",
    keyframes: { scale: [1.25, 1], x: [0, 0], y: [0, 0], opacity: [1, 1] } },
  { id: "pan", label: "Pan left / right", description: "Sweeps across the photo and back.",
    defaultSeconds: 5, loop: "reverse",
    keyframes: { scale: [1.2, 1.2], x: [-6, 6], y: [0, 0], opacity: [1, 1] } },
  { id: "parallax", label: "Parallax float", description: "A soft, drifting floating-camera feel.",
    defaultSeconds: 4, loop: "reverse",
    keyframes: { scale: [1.12, 1.16], x: [-2, 2], y: [-2, 2], opacity: [1, 1] } },
  { id: "pulse", label: "Gentle pulse", description: "A subtle heartbeat that draws the eye.",
    defaultSeconds: 3, loop: "reverse",
    keyframes: { scale: [1, 1.06], x: [0, 0], y: [0, 0], opacity: [1, 1] } },
  { id: "pop-in", label: "Pop-in", description: "Photo scales up and fades in with a bounce.",
    defaultSeconds: 2, loop: "restart",
    keyframes: { scale: [0.8, 1], x: [0, 0], y: [0, 0], opacity: [0, 1] } },
];

export const ASPECTS = [
  { id: "9:16", label: "9:16 Story / Reel", css: "9 / 16" },
  { id: "1:1", label: "1:1 Square", css: "1 / 1" },
  { id: "16:9", label: "16:9 Wide", css: "16 / 9" },
] as const;

export type AspectId = (typeof ASPECTS)[number]["id"];
export const MIN_SECONDS = 2;
export const MAX_SECONDS = 8;
