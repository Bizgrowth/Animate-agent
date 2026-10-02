export const MAX_BYTES = 10 * 1024 * 1024;
type AllowedType = "image/jpeg" | "image/png" | "image/webp";

export type CleanImage = {
  url: string; // object URL for preview
  blob: Blob; // re-encoded image with all metadata removed
  type: AllowedType;
  width: number;
  height: number;
  name: string;
};

// Check the file's real contents, not just its name or declared type.
async function sniffType(file: File): Promise<AllowedType | null> {
  const b = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "image/jpeg";
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return "image/png";
  const ascii = (s: number, e: number) => String.fromCharCode(...b.slice(s, e));
  if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "image/webp";
  return null;
}

/**
 * Validates the file and returns a clean copy.
 * Redrawing onto a canvas drops EXIF data (GPS location, camera, etc.)
 * while keeping the correct rotation.
 */
export async function prepareImage(file: File): Promise<CleanImage> {
  if (file.size > MAX_BYTES) throw new Error("That file is over 10 MB. Please choose a smaller photo.");
  const type = await sniffType(file);
  if (!type) throw new Error("Please upload a JPG, PNG, or WebP photo.");

  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch {
    throw new Error("We couldn't read that image. It may be corrupt.");
  }
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0);
  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, type, 0.92));
  if (!blob) throw new Error("Something went wrong preparing your photo. Please try again.");
  const out = { width: bitmap.width, height: bitmap.height };
  bitmap.close();
  return { ...out, blob, type, name: file.name, url: URL.createObjectURL(blob) };
}
