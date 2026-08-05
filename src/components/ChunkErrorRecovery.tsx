"use client";

import { useEffect } from "react";

const RELOAD_FLAG = "ebi-chunk-reload-at";
const RELOAD_COOLDOWN_MS = 10_000;

function reloadOnce() {
  const last = Number(sessionStorage.getItem(RELOAD_FLAG) ?? 0);
  if (Date.now() - last < RELOAD_COOLDOWN_MS) return;

  sessionStorage.setItem(RELOAD_FLAG, String(Date.now()));
  window.location.reload();
}

function isStaleAssetError(message: string) {
  return /ChunkLoadError|Loading chunk .* failed|Failed to fetch dynamically imported module/i.test(
    message
  );
}

export default function ChunkErrorRecovery() {
  useEffect(() => {
    const handleResourceError = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const isStaleStylesheet =
        target instanceof HTMLLinkElement &&
        target.rel === "stylesheet" &&
        target.href.includes("/_next/static/");

      const isStaleScript =
        target instanceof HTMLScriptElement &&
        target.src.includes("/_next/static/");

      if (isStaleStylesheet || isStaleScript) {
        reloadOnce();
      }
    };

    const handleWindowError = (event: ErrorEvent) => {
      if (isStaleAssetError(event.message ?? "")) {
        reloadOnce();
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      const message =
        event.reason instanceof Error
          ? event.reason.message
          : String(event.reason ?? "");
      if (isStaleAssetError(message)) {
        reloadOnce();
      }
    };

    window.addEventListener("error", handleResourceError, true);
    window.addEventListener("error", handleWindowError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleResourceError, true);
      window.removeEventListener("error", handleWindowError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
