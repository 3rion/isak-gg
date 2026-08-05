"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaDiscord, FaDice, FaGift, FaTrophy } from "react-icons/fa6";
import { SITE_NAME, SOCIAL_LINKS, STAKE_URL } from "@/config/site";

const navItems = [
  { label: "LEADERBOARD", href: "/", icon: FaTrophy },
  { label: "REWARDS", href: "/rewards", icon: FaGift },
];

const contactItem = { label: "CONTACT", href: SOCIAL_LINKS.discord, icon: FaDiscord };

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkLive = () => {
      fetch("/api/kick-status")
        .then((res) => res.json())
        .then((data) => setIsLive(Boolean(data.live)))
        .catch(() => setIsLive(false));
    };

    checkLive();
    const interval = setInterval(checkLive, 60_000);
    return () => clearInterval(interval);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[rgba(18,20,24,0.72)] shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-md">
      <div className="relative flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative h-5 w-6 min-[850px]:hidden"
          >
            <span
              className={`absolute left-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "top-2 rotate-45" : "top-0 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "top-2 -rotate-45" : "top-4 rotate-0"
              }`}
            />
          </button>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-bold tracking-wide text-white"
          >
            {SITE_NAME}
          </Link>

          <a
            href={SOCIAL_LINKS.kick}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-bold tracking-wide transition-colors ${
              isLive
                ? "bg-[#53fc18]/15 text-[#53fc18] hover:bg-[#53fc18]/25"
                : "bg-white/5 text-zinc-500 hover:bg-white/10"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isLive ? "bg-[#53fc18]" : "bg-zinc-500"
              }`}
            />
            {isLive ? "LIVE" : "OFFLINE"}
          </a>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 min-[850px]:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-2 py-4 text-sm tracking-wide transition-colors ${
                isActive(item.href)
                  ? "font-bold text-white after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:rounded-t-sm after:bg-[#ff2d2d] after:content-['']"
                  : "font-semibold text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <item.icon size={14} />
              {item.label}
            </Link>
          ))}

          <a
            href={STAKE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 whitespace-nowrap rounded-md bg-[#277fe4] px-4 py-2 text-xs font-bold tracking-wide text-white transition-opacity hover:opacity-90"
          >
            <FaDice size={14} />
            PLAY STAKE
          </a>

          <a
            href={contactItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 py-4 text-sm font-semibold tracking-wide text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <contactItem.icon size={14} />
            {contactItem.label}
          </a>
        </nav>
      </div>

      <nav
        className={`flex flex-col overflow-hidden border-white/[0.07] px-6 transition-all duration-300 ease-in-out min-[850px]:hidden ${
          menuOpen
            ? "max-h-80 border-t py-3 opacity-100"
            : "max-h-0 border-t-0 py-0 opacity-0"
        }`}
      >
        <a
          href={STAKE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mb-2 flex items-center justify-center gap-2 rounded-md bg-[#277fe4] py-3 text-sm font-bold tracking-wide text-white"
        >
          <FaDice size={14} />
          PLAY STAKE
        </a>

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 py-3 text-sm tracking-wide ${
              isActive(item.href) ? "font-bold text-white" : "font-semibold text-zinc-500"
            }`}
          >
            <item.icon size={14} />
            {item.label}
          </Link>
        ))}

        <a
          href={contactItem.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 py-3 text-sm font-semibold tracking-wide text-zinc-500"
        >
          <contactItem.icon size={14} />
          {contactItem.label}
        </a>
      </nav>
    </header>
  );
}
