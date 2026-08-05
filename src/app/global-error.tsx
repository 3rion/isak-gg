"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#090a0c] px-6 text-center text-white">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 max-w-md text-sm text-zinc-400">
          This page hit an unexpected error. Reloading usually fixes it.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-md bg-[#277fe4] px-6 py-2.5 text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
