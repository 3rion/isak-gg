import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CompetitionRulesButton from "@/components/CompetitionRulesButton";
import CountdownTimer from "@/components/CountdownTimer";
import FloatingHitImage from "@/components/FloatingHitImage";
import ParticipantsList from "@/components/ParticipantsList";
import TopThree from "@/components/TopThree";
import { SITE_NAME, STAKE_CODE, STAKE_URL } from "@/config/site";
import { getCurrentPeriodEnd } from "@/lib/leaderboard";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Stake Rewards & Leaderboards`,
  description: `Get more from every wager on Stake with code ${STAKE_CODE}. Join monthly leaderboards, unlock wager-based rewards, claim exclusive bonuses, and maximize your rewards.`,
};

export default async function Home() {
  const periodEnd = await getCurrentPeriodEnd();

  return (
    <main className="flex-1 px-6 pt-8 pb-16 text-center">
      <Link
        href={STAKE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mb-4 block w-fit animate-fade-in-down"
      >
        <Image
          src="/uploads/stake-white.svg"
          alt="Stake"
          width={160}
          height={40}
          className="h-auto w-20 sm:w-20"
          priority
        />
      </Link>
      <div className="relative mx-auto flex w-fit items-center justify-center">
        <FloatingHitImage
          src="/uploads/duck.png"
          alt=""
          width={200}
          height={200}
          aria-hidden="true"
          direction="left"
          wrapperClassName="absolute -left-20 top-1/2 -translate-y-1/2 sm:-left-32"
          wrapperStyle={
            {
              "--rotate": "-6deg",
              animation:
                "float-in 0.7s ease-out 100ms backwards, float 6s ease-in-out 800ms infinite",
            } as React.CSSProperties
          }
          imageClassName="w-14 sm:w-20"
        />

        <h1
          className="animate-fade-in-down text-[56px] font-extrabold text-[#22e065] sm:text-[78px]"
          style={{ animationDelay: "100ms" }}
        >
          PAUSED
        </h1>

        <FloatingHitImage
          src="/uploads/no-limit-wild.png"
          alt="No Limit Wild"
          width={300}
          height={260}
          direction="right"
          wrapperClassName="absolute -right-20 top-1/2 -translate-y-1/2 sm:-right-28"
          wrapperStyle={
            {
              "--rotate": "5deg",
              animation:
                "float-in-alt 0.7s ease-out 100ms backwards, float-alt 6s ease-in-out 800ms infinite",
            } as React.CSSProperties
          }
          imageClassName="w-14 sm:w-20"
        />
      </div>
      <h2
        className="animate-fade-in-down -mt-2 text-[36px] font-extrabold text-white sm:text-[50px]"
        style={{ animationDelay: "200ms" }}
      >
        LEADERBOARD
      </h2>

      <div
        className="animate-fade-in-down mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row"
        style={{ animationDelay: "300ms" }}
      >
        <Link
          href={STAKE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-64 items-center justify-center rounded-md bg-[#277fe4] px-8 py-3 text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90"
        >
          JOIN STAKE
        </Link>
        <CompetitionRulesButton />
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
        <TopThree />
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
        <CountdownTimer endDate={periodEnd} />
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
        <ParticipantsList />
      </div>
    </main>
  );
}
