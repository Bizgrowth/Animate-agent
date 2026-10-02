"use client";

import { motion, useReducedMotion } from "motion/react";
import { ASPECTS, type AspectId, type Preset } from "@/lib/presets";

type Props = { src: string; preset: Preset; seconds: number; aspect: AspectId; replayKey: number };

export default function MotionPreview({ src, preset, seconds, aspect, replayKey }: Props) {
  const reduceMotion = useReducedMotion();
  const css = ASPECTS.find((a) => a.id === aspect)!.css;
  const k = preset.keyframes;
  const isPop = preset.id === "pop-in";

  return (
    <div className="mx-auto w-full overflow-hidden rounded-lg border border-border bg-black"
      style={{ aspectRatio: css, maxHeight: "70vh" }}>
      <motion.img
        // Changing the key restarts the animation from the beginning.
        key={`${preset.id}-${seconds}-${aspect}-${replayKey}`}
        src={src}
        alt="Animated preview of your photo"
        className="h-full w-full object-cover"
        initial={reduceMotion ? false : { scale: k.scale[0], x: `${k.x[0]}%`, y: `${k.y[0]}%`, opacity: k.opacity[0] }}
        animate={reduceMotion ? undefined : { scale: k.scale[1], x: `${k.x[1]}%`, y: `${k.y[1]}%`, opacity: k.opacity[1] }}
        transition={{
          duration: isPop ? Math.min(seconds, 1.2) : seconds,
          ease: isPop ? [0.34, 1.56, 0.64, 1] : "easeInOut",
          repeat: Infinity,
          repeatType: preset.loop === "reverse" ? "reverse" : "loop",
          repeatDelay: isPop ? Math.max(seconds - 1.2, 0.5) : 0,
        }}
      />
    </div>
  );
}
