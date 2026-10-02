import PhotoUploader from "@/components/PhotoUploader";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <header>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Animate Agent · Preview</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Bring your photo to life.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Upload a photo, pick a motion style, and preview the clip live before you export it.
        </p>
      </header>
      <PhotoUploader />
    </main>
  );
}
