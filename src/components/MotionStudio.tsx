"use client";

import { useState } from "react";
import MotionPreview from "./MotionPreview";
import { ASPECTS, MAX_SECONDS, MIN_SECONDS, PRESETS, type AspectId } from "@/lib/presets";

const pick = (on: boolean) =>
  `rounded-md border px-3 py-2 text-left text-sm transition ${
    on ? "border-accent bg-accent/10 text-white" : "border-border bg-surface text-muted hover:border-muted"
  }`;
const heading = "mb-2 font-mono text-xs uppercase tracking-widest text-muted";

export default function MotionStudio({ src }: { src: string }) {
  const [presetId, setPresetId] = useState(PRESETS[0].id);
  const [seconds, setSeconds] = useState(PRESETS[0].defaultSeconds);
  const [aspect, setAspect] = useState<AspectId>("9:16");
  const [replayKey, setReplayKey] = useState(0);
  const preset = PRESETS.find((p) => p.id === presetId)!;

  return (
    <div className="grid w-full gap-6 md:grid-cols-[1fr_20rem]">
      <MotionPreview src={src} preset={preset} seconds={seconds} aspect={aspect} replayKey={replayKey} />

      <div className="space-y-6">
        <section>
          <h2 className={heading}>Motion style</h2>
          <div className="grid grid-cols-2 gap-2">
            {PRESETS.map((p) => (
              <button key={p.id} aria-pressed={p.id === presetId} className={pick(p.id === presetId)}
                onClick={() => { setPresetId(p.id); setSeconds(p.defaultSeconds); }}>
                {p.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">{preset.description}</p>
        </section>

        <section>
          <label htmlFor="duration" className={`${heading} flex justify-between`}>
            <span>Duration</span><span>{seconds} s</span>
          </label>
          <input id="duration" type="range" min={MIN_SECONDS} max={MAX_SECONDS} step={1} value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))} className="w-full accent-accent" />
        </section>

        <section>
          <h2 className={heading}>Shape</h2>
          <div className="flex flex-col gap-2">
            {ASPECTS.map((a) => (
              <button key={a.id} aria-pressed={a.id === aspect} className={pick(a.id === aspect)}
                onClick={() => setAspect(a.id)}>
                {a.label}
              </button>
            ))}
          </div>
        </section>

        <button onClick={() => setReplayKey((n) => n + 1)}
          className="w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:brightness-110">
          Replay
        </button>
      </div>
    </div>
  );
}
