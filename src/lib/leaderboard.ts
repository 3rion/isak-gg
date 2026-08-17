const CSV_URL = process.env.LEADERBOARD_CSV_URL;
const PREVIOUS_CSV_URL = process.env.LEADERBOARD_PREVIOUS_CSV_URL;

export interface LeaderboardEntry {
  rank: number;
  username: string;
  wagered: number;
}

interface RawEntry extends LeaderboardEntry {
  startDateUtc: string;
}

const TOP_N = 20;

function emptySlots(): LeaderboardEntry[] {
  return Array.from({ length: TOP_N }, (_, i) => ({
    rank: i + 1,
    username: "",
    wagered: 0,
  }));
}

async function fetchEntries(url: string): Promise<RawEntry[]> {
  const res = await fetch(url, { next: { revalidate: 60 } });
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
    .filter((entry) => entry.username && Number.isFinite(entry.rank) && entry.startDateUtc);
}

// Trevor.io generates a fresh CSV export per race period rather than one
// export covering all periods, so the current and previous periods are
// fetched from separate URLs and merged.
async function fetchAllEntries(): Promise<RawEntry[]> {
  if (!CSV_URL) {
    console.error("LEADERBOARD_CSV_URL is not set");
    return [];
  }

  const urls = [CSV_URL, PREVIOUS_CSV_URL].filter((url): url is string => Boolean(url));
  const results = await Promise.all(urls.map(fetchEntries));
  return results.flat();
}

// Race periods aren't necessarily aligned to calendar months (e.g. a race can
// run 07-12 to 08-12), so the "current" and "previous" periods are derived
// from whichever distinct start dates are actually present in the CSV.
function getPeriodStarts(entries: RawEntry[]): string[] {
  const now = new Date();
  const nowUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());

  return Array.from(new Set(entries.map((entry) => entry.startDateUtc)))
    .filter((startDateUtc) => new Date(`${startDateUtc}T00:00:00Z`).getTime() <= nowUtc)
    .sort((a, b) => (a < b ? 1 : -1));
}

function entriesForPeriod(entries: RawEntry[], startDateUtc: string): LeaderboardEntry[] {
  return entries
    .filter((entry) => entry.startDateUtc === startDateUtc)
    .sort((a, b) => a.rank - b.rank)
    .map(({ rank, username, wagered }) => ({ rank, username, wagered }));
}

export async function getLeaderboardData(): Promise<LeaderboardEntry[]> {
  const allEntries = await fetchAllEntries();
  const [currentPeriod] = getPeriodStarts(allEntries);
  const entries = currentPeriod ? entriesForPeriod(allEntries, currentPeriod) : [];
  const byRank = new Map(entries.map((entry) => [entry.rank, entry]));

  return emptySlots().map((slot) => byRank.get(slot.rank) ?? slot);
}

export async function getPreviousLeaderboardData(): Promise<LeaderboardEntry[]> {
  const allEntries = await fetchAllEntries();
  const [, previousPeriod] = getPeriodStarts(allEntries);
  if (!previousPeriod) return [];

  return entriesForPeriod(allEntries, previousPeriod).filter((entry) => entry.rank <= 10);
}

// Race periods run for one month starting on their start_date_utc (e.g.
// 07-12 to 08-12), not necessarily aligned to the calendar month.
export async function getCurrentPeriodEnd(): Promise<string | null> {
  const allEntries = await fetchAllEntries();
  const [currentPeriod] = getPeriodStarts(allEntries);
  if (!currentPeriod) return null;

  const start = new Date(`${currentPeriod}T00:00:00Z`);
  const end = new Date(
    Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, start.getUTCDate())
  );
  return end.toISOString();
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
