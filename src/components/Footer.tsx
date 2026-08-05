import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SiKick } from "react-icons/si";
import { SITE_NAME, SOCIAL_LINKS } from "@/config/site";

const socials = [
  { label: "Kick", href: SOCIAL_LINKS.kick, icon: SiKick },
  { label: "Twitter", href: SOCIAL_LINKS.twitter, icon: FaXTwitter },
  { label: "Discord", href: SOCIAL_LINKS.discord, icon: FaDiscord },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: FaYoutube },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: FaInstagram },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok, icon: FaTiktok },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-lg border border-white/10 bg-white/[0.02] px-6 py-4 text-center text-xs leading-relaxed text-zinc-500 sm:text-left">
          18+ | Play Responsibly. Gambling should be viewed as a form of
          entertainment, not a way to make money. Only gamble with money you
          can afford to lose, and set a budget and time limit before you
          begin. Never chase your losses or use gambling as a way to escape
          everyday problems.
        </div>

        <div className="mt-6 flex items-center justify-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          © 2026 {SITE_NAME}.GG All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
