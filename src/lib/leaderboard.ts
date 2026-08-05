const CSV_URL = process.env.LEADERBOARD_CSV_URL;

export interface LeaderboardEntry {
  rank: number;
  username: string;
  wagered: number;
}

function getMonthStart(monthsAgo = 0) {
  const now = new Date();
  const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - monthsAgo, 1));
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}-01`;
}

const TOP_N = 20;

function emptySlots(): LeaderboardEntry[] {
  return Array.from({ length: TOP_N }, (_, i) => ({
    rank: i + 1,
    username: "",
    wagered: 0,
  }));
}

async function fetchEntriesForMonth(monthStart: string): Promise<LeaderboardEntry[]> {
  if (!CSV_URL) {
    console.error("LEADERBOARD_CSV_URL is not set");
    return [];
  }

  const res = await fetch(CSV_URL, { next: { revalidate: 60 } });
  if (!res.ok) return [];

  const lines = (await res.text()).trim().split("\n").slice(1);

  return lines
    .filter(Boolean)
    .map((line) => {
      const [, , username, wagered, rank, startDateUtc] = line.split(",");
      return {
        rank: Number(rank),
        username,
        wagered: Number(wagered),
        startDateUtc,
      };
    })
    .filter(
      (entry) =>
        entry.username &&
        Number.isFinite(entry.rank) &&
        entry.startDateUtc === monthStart
    )
    .sort((a, b) => a.rank - b.rank)
    .map(({ rank, username, wagered }) => ({ rank, username, wagered }));
}

export async function getLeaderboardData(): Promise<LeaderboardEntry[]> {
  const entries = await fetchEntriesForMonth(getMonthStart(0));
  const byRank = new Map(entries.map((entry) => [entry.rank, entry]));

  return emptySlots().map((slot) => byRank.get(slot.rank) ?? slot);
}

export async function getPreviousLeaderboardData(): Promise<LeaderboardEntry[]> {
  const entries = await fetchEntriesForMonth(getMonthStart(1));
  return entries.filter((entry) => entry.rank <= 10);
}

export function isPlaceholder(entry: LeaderboardEntry) {
  return !entry.username;
}

export function maskUsername(username: string) {
  const visible = username.slice(0, 2);
  const hiddenLength = Math.max(username.length - visible.length, 1);
  return `${visible}${"*".repeat(hiddenLength)}`;
}

export function formatCurrency(amount: number) {
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
