import type { Metadata } from "next";
import WagerTiers from "@/components/WagerTiers";

export const metadata: Metadata = {
  title: "Wager Rewards",
};

export const dynamic = "force-dynamic";

const STAKE_URL = "https://stake.com/?offer=ebi";

export default function RewardsPage() {
  return (
    <main className="flex-1 px-6 pb-16">
      <h1
        className="animate-fade-in-down pt-16 text-center text-4xl font-bold tracking-wide text-white sm:text-5xl"
      >
        <span className="text-[#05d8fb]">WAGER</span> REWARDS
      </h1>

      <p
        className="animate-fade-in-down mx-auto mt-4 max-w-2xl text-center text-sm text-zinc-400 sm:text-base"
        style={{ animationDelay: "100ms" }}
      >
        When you play on{" "}
        <a
          href={STAKE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#05d8fb] hover:underline"
        >
          Stake
        </a>{" "}
        under code{" "}
        <a
          href={STAKE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#05d8fb] hover:underline"
        >
          EBI
        </a>
        , you can receive additional rewards based on your total wager amount.
        The more you wager, the higher your reward will be.
      </p>

      <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <WagerTiers />
      </div>
    </main>
  );
}
