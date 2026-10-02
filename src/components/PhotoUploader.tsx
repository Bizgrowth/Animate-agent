"use client";

import { useEffect, useState } from "react";
import MotionStudio from "./MotionStudio";
import { prepareImage, type CleanImage } from "@/lib/image-upload";

export default function PhotoUploader() {
  const [image, setImage] = useState<CleanImage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => () => { if (image) URL.revokeObjectURL(image.url); }, [image]);

  async function handle(file: File | undefined) {
    if (!file) return;
    setError(null);
    try {
      setImage(await prepareImage(file));
    } catch (e) {
      setImage(null);
      setError(e instanceof Error ? e.message : "Upload failed.");
    }
  }

  return (
    <div className="w-full">
      {!image ? (
        <label
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handle(e.dataTransfer.files[0]); }}
          className={`flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center transition ${
            dragging ? "border-accent bg-accent/10" : "border-border bg-surface hover:border-muted"
          }`}
        >
          <span className="text-lg font-medium">Drop a photo here, or click to choose</span>
          <span className="mt-2 font-mono text-xs text-muted">JPG · PNG · WEBP · MAX 10 MB</span>
          <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only"
            onChange={(e) => handle(e.target.files?.[0])} />
        </label>
      ) : (
        <div className="space-y-4">
          <MotionStudio src={image.url} />
          <div className="flex items-center justify-between font-mono text-xs text-muted">
            <span>{image.name} · {image.width}×{image.height} · location data removed</span>
            <button onClick={() => setImage(null)} className="text-accent hover:underline">Choose another</button>
          </div>
        </div>
      )}
      {error && <p role="alert" className="mt-3 text-sm text-red-400">{error}</p>}
    </div>
  );
}
