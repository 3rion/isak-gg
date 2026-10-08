import Image from "next/image";
import {
  formatCurrency,
  getLeaderboardData,
  isPlaceholder,
  maskUsername,
} from "@/lib/leaderboard";

const rankConfig: Record<
  number,
  { color: string; order: string; elevate: string }
> = {
  1: { color: "#e3b737", order: "sm:order-2", elevate: "sm:-mt-6" },
  2: { color: "#a6aabf", order: "sm:order-1", elevate: "" },
  3: { color: "#c8822c", order: "sm:order-3", elevate: "" },
};

export default async function TopThree() {
  const data = await getLeaderboardData();
  const topThree = data.filter((entry) => entry.rank <= 3);

  return (
    <div className="mx-auto mt-24 grid w-full max-w-5xl grid-cols-1 items-start gap-8 sm:grid-cols-3">
      {topThree.map((entry) => {
        const config = rankConfig[entry.rank];

        return (
          <div
            key={entry.rank}
            className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#121418] px-10 pt-14 pb-10 shadow-lg ${config.order} ${config.elevate}`}
          >
            <span
              className="absolute inset-x-0 top-0 h-1"
              style={{ backgroundColor: config.color }}
            />
            <span
              className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 text-[140px] font-extrabold leading-none"
              style={{ color: config.color, opacity: 0.15 }}
            >
              #{entry.rank}
            </span>

            <div className="relative flex flex-col items-center">
              <div
                className="mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 p-4"
                style={{ borderColor: config.color, backgroundColor: "#071d2a" }}
              >
                <Image
                  src="/uploads/s-white.svg"
                  alt=""
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mb-5 text-xl font-bold text-white">
                {isPlaceholder(entry) ? "—" : maskUsername(entry.username)}
              </p>

              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Wagered
              </p>
              <p className="text-lg font-bold text-white">
                {isPlaceholder(entry) ? "—" : formatCurrency(entry.wagered)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
