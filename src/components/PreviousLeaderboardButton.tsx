"use client";

import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import {
  formatCurrency,
  isPlaceholder,
  maskUsername,
  type LeaderboardEntry,
} from "@/lib/leaderboard";

const rankColor: Record<number, string> = {
  1: "#e3b737",
  2: "#a6aabf",
  3: "#c8822c",
};

export default function PreviousLeaderboardButton({
  entries,
}: {
  entries: LeaderboardEntry[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-md border border-white/20 px-4 py-2 text-xs font-bold tracking-wide text-white transition-colors hover:bg-white/10"
      >
        PREVIOUS LEADERBOARD
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#121418] text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
              <h3 className="text-lg font-bold text-white">
                Previous Leaderboard{" "}
                <span className="text-sm font-normal text-zinc-500">
                  (Top 10)
                </span>
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <FaXmark size={14} />
              </button>
            </div>

            <div>
              {entries.length === 0 ? (
                <p className="px-7 py-6 text-sm text-[#9BA5B4]">
                  No data available for the previous leaderboard.
                </p>
              ) : (
                entries.map((entry) => {
                  const color = rankColor[entry.rank];

                  return (
                    <div
                      key={entry.rank}
                      className="flex items-center justify-between border-b border-white/5 px-6 py-4 last:border-b-0"
                    >
                      <div className="flex items-center gap-4">
                        <h2
                          className="w-10 text-left text-sm font-bold"
                          style={{ color: color ?? "#71717a" }}
                        >
                          #{entry.rank}
                        </h2>
                        <h1
                          className="text-sm font-bold sm:text-base"
                          style={{ color: color ?? "#ffffff" }}
                        >
                          {isPlaceholder(entry) ? "—" : maskUsername(entry.username)}
                        </h1>
                      </div>

                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {isPlaceholder(entry) ? "—" : formatCurrency(entry.wagered)}
                      </h3>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
