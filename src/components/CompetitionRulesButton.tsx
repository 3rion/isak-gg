"use client";

import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function CompetitionRulesButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-64 cursor-pointer rounded-md border border-white/20 px-8 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white/10"
      >
        COMPETITION RULES
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl border border-white/10 bg-[#121418] text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
              <h3 className="text-lg font-bold text-white">Competition Rules</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <FaXmark size={14} />
              </button>
            </div>

            <div className="px-7 py-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-white">
                How to Participate
              </p>
              <p className="mb-5 text-sm leading-relaxed text-[#9BA5B4]">
                Play on Stake.com using the affiliate code{" "}
                <strong className="text-[#E8EAF0]">EBI</strong>. Once the code
                is applied, every wager you place will be
                automatically tracked and counted toward your position on the
                leaderboard.
              </p>

              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-white">
                Wager Counting Rules
              </p>
              <p className="mb-3 text-sm leading-relaxed text-[#9BA5B4]">
                To ensure fair competition, wager contributions are adjusted
                based on each game&rsquo;s return-to-player (RTP) percentage.
              </p>
              <div className="mb-5 rounded-lg bg-white/[0.03] px-4 py-3">
                <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                  <span className="text-[#9BA5B4]">Games with RTP ≤ 98%</span>
                  <span className="font-bold text-green-400">100% counts</span>
                </div>
                <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                  <span className="text-[#9BA5B4]">Games with RTP &gt; 98%</span>
                  <span className="font-bold text-yellow-400">50% counts</span>
                </div>
                <div className="flex justify-between py-1.5 text-xs">
                  <span className="text-[#9BA5B4]">Games with RTP ≥ 99%</span>
                  <span className="font-bold text-red-400">10% counts</span>
                </div>
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-white">
                Results &amp; Payouts
              </p>
              <p className="mb-5 text-sm leading-relaxed text-[#9BA5B4]">
                The leaderboard resets at midnight UTC on the first of each month. Results may take up to 48 hours to be published after the competition ends, and prizes up to 72 hours to be paid.
              </p>

              <div className="rounded-lg border-l-2 border-white/20 bg-white/[0.02] px-4 py-3 text-xs leading-relaxed text-zinc-500">
                Wagers are automatically tracked through Stake’s affiliate system. Any wager abuse will result in you not being eligible for leaderboard payouts. EBI reserves the right to modify the rules and prizes at any time.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
