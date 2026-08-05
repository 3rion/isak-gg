import {
  formatCurrency,
  getLeaderboardData,
  getPreviousLeaderboardData,
  isPlaceholder,
  maskUsername,
} from "@/lib/leaderboard";
import PreviousLeaderboardButton from "@/components/PreviousLeaderboardButton";
import NextRefreshCountdown from "@/components/NextRefreshCountdown";

export default async function ParticipantsList() {
  const [data, previousData] = await Promise.all([
    getLeaderboardData(),
    getPreviousLeaderboardData(),
  ]);
  const rest = data.filter((entry) => entry.rank >= 4 && entry.rank <= 20);

  return (
    <div className="mx-auto mt-12 w-full max-w-5xl">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <NextRefreshCountdown />
        <PreviousLeaderboardButton entries={previousData} />
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121418]">
        {rest.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center justify-between border-b border-white/5 px-6 py-4 last:border-b-0"
          >
            <div className="flex items-center gap-4">
              <h2 className="w-10 text-left text-sm font-bold text-zinc-500">
                #{entry.rank}
              </h2>
              <h1 className="text-sm font-bold text-white sm:text-base">
                {isPlaceholder(entry) ? "—" : maskUsername(entry.username)}
              </h1>
            </div>

            <h3 className="text-sm font-bold text-white sm:text-base">
              {isPlaceholder(entry) ? "—" : formatCurrency(entry.wagered)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
