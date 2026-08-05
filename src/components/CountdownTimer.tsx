"use client";

import { useEffect, useState } from "react";

function getNextResetDate() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1, 0, 0, 0));
}

function getTimeLeft() {
  const diff = Math.max(0, getNextResetDate().getTime() - Date.now());

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "DAYS", value: timeLeft ? timeLeft.days : 0 },
    { label: "HOURS", value: timeLeft ? timeLeft.hours : 0 },
    { label: "MINS", value: timeLeft ? timeLeft.minutes : 0 },
    { label: "SECS", value: timeLeft ? timeLeft.seconds : 0 },
  ];

  return (
    <div className="mx-auto mt-16 flex w-full max-w-5xl items-center justify-center gap-4 sm:gap-8">
      <span className="h-px flex-1 bg-white/15" />

      <div className="flex items-center gap-6 sm:gap-10">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {timeLeft ? pad(unit.value) : "--"}
            </h2>
            <p className="mt-1 text-[11px] font-semibold tracking-wide text-zinc-500">
              {unit.label}
            </p>
          </div>
        ))}
      </div>

      <span className="h-px flex-1 bg-white/15" />
    </div>
  );
}
