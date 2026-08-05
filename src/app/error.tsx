"use client";

import { useEffect } from "react";

export default function Error({
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
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">
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
    </main>
  );
}
