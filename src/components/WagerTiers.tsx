import { FaDiscord } from "react-icons/fa6";

function BronzeMedal({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        fill="#B87333"
        fillRule="evenodd"
        d="M16.469 7.531 23 9.594l-4.125 5.5.688 7.906L12 20.25 4.438 23l.687-7.906L1 9.594 7.531 7.53 12 1zM8.906 9.25l-4.125 1.719 2.75 3.781v4.469L12 17.844l4.469 1.375V14.75l2.75-3.781-4.125-1.719L12 5.813z"
        clipRule="evenodd"
      />
      <path fill="#fff" fillOpacity=".3" d="m12 1 4.469 6.531L23 9.594l-3.781 1.375-4.125-1.719L12 5.813z" />
      <path fill="#fff" fillOpacity=".2" d="m23 9.594-3.781 1.375-2.75 3.781v4.469L19.562 23l-.687-7.906z" />
      <path fill="#000" fillOpacity=".4" d="M16.469 19.219 12 17.844l-4.469 1.375L4.438 23 12 20.25 19.563 23z" />
      <path fill="#fff" fillOpacity=".3" d="m1 9.594 3.781 1.375 2.75 3.781v4.469L4.438 23l.687-7.906z" />
      <path fill="#fff" d="M12 1 7.531 7.531 1 9.594l3.781 1.375L8.906 9.25 12 5.813z" />
    </svg>
  );
}

function SilverMedal({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M16.469 7.531 23 9.594l-4.125 5.5.688 7.906L12 20.25 4.438 23l.687-7.906L1 9.594 7.531 7.53 12 1zM8.906 9.25l-4.125 1.719 2.75 3.781v4.469L12 17.844l4.469 1.375V14.75l2.75-3.781-4.125-1.719L12 5.813z"
        clipRule="evenodd"
      />
      <path fill="#fff" fillOpacity=".3" d="m12 1 4.469 6.531L23 9.594l-3.781 1.375-4.125-1.719L12 5.813z" />
      <path fill="#fff" fillOpacity=".2" d="m23 9.594-3.781 1.375-2.75 3.781v4.469L19.562 23l-.687-7.906z" />
      <path fill="#000" fillOpacity=".4" d="M16.469 19.219 12 17.844l-4.469 1.375L4.438 23 12 20.25 19.563 23z" />
      <path fill="#fff" fillOpacity=".3" d="m1 9.594 3.781 1.375 2.75 3.781v4.469L4.438 23l.687-7.906z" />
      <path fill="#fff" d="M12 1 7.531 7.531 1 9.594l3.781 1.375L8.906 9.25 12 5.813z" />
      <path
        fill="#fff"
        fillOpacity=".2"
        d="m12 5.813 3.094 3.437 4.125 1.719-2.75 3.781v4.469L12 17.844l-4.469 1.375V14.75l-2.75-3.781L8.906 9.25z"
      />
    </svg>
  );
}

function GoldMedal({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        fill="#FFB947"
        fillRule="evenodd"
        d="M16.469 7.531 23 9.594l-4.125 5.5.688 7.906L12 20.25 4.438 23l.687-7.906L1 9.594 7.531 7.53 12 1zM8.906 9.25l-4.125 1.719 2.75 3.781v4.469L12 17.844l4.469 1.375V14.75l2.75-3.781-4.125-1.719L12 5.813z"
        clipRule="evenodd"
      />
      <path fill="#fff" fillOpacity=".3" d="m12 1 4.469 6.531L23 9.594l-3.781 1.375-4.125-1.719L12 5.813z" />
      <path fill="#fff" fillOpacity=".1" d="m23 9.594-3.781 1.375-2.75 3.781v4.469L19.562 23l-.687-7.906z" />
      <path fill="#000" fillOpacity=".4" d="M16.469 19.219 12 17.844l-4.469 1.375L4.438 23 12 20.25 19.563 23z" />
      <path fill="#fff" fillOpacity=".1" d="m1 9.594 3.781 1.375 2.75 3.781v4.469L4.438 23l.687-7.906z" />
      <path fill="#fff" d="M12 1 7.531 7.531 1 9.594l3.781 1.375L8.906 9.25 12 5.813z" />
      <path
        fill="#fff"
        fillOpacity=".2"
        d="M4.781 10.969 12 14.063l7.219-3.094L23 9.594 16.469 7.53 12 1 7.531 7.531 1 9.594z"
      />
    </svg>
  );
}

function PlatinumMedalBase({
  className,
  numeral,
}: {
  className?: string;
  numeral: React.ReactNode;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path fill="#18A4AC" d="m16.469 7.531 6.53 2.063-4.124 5.5.687 7.906L12 20.25 4.437 23l.688-7.906L1 9.594 7.531 7.53 12 1z" />
      <path
        fill="#2FADB4"
        d="m5.125 15.063 2.406-.343L12 13.005l4.469 1.715 2.406.343L23 9.575l-6.531-2.058L12 1 7.531 7.517 1 9.575z"
      />
      <path
        fill="#fff"
        fillOpacity=".4"
        d="M23 9.627 19.204 11l-2.76 3.772v4.457L19.548 23l-.69-7.886zm-22 0L4.796 11l2.76 3.772v4.457L4.452 23l.69-7.886z"
      />
      <path fill="#1CC1CA" d="m16.53 19.204-4.487-1.38-4.486 1.38L4.45 23l7.592-2.76L19.635 23z" />
      {numeral}
    </svg>
  );
}

function PlatinumMedal1({ className }: { className?: string }) {
  return (
    <PlatinumMedalBase
      className={className}
      numeral={<path fill="#0F1F28" d="M13.122 17.137H10.9V9.8h2.222z" />}
    />
  );
}

function PlatinumMedal2({ className }: { className?: string }) {
  return (
    <PlatinumMedalBase
      className={className}
      numeral={<path fill="#0F1F28" d="M14.772 16.675H12.55V9.338h2.222zM11.45 16.675H9.229V9.338h2.223z" />}
    />
  );
}

function PlatinumMedal3({ className }: { className?: string }) {
  return (
    <PlatinumMedalBase
      className={className}
      numeral={<path fill="#0F1F28" d="M7.6 9.8h2.2v7.337H7.6zm3.3 0h2.2v7.337h-2.2zm3.3 0h2.2v7.337h-2.2z" />}
    />
  );
}

function PlatinumMedal4({ className }: { className?: string }) {
  return (
    <PlatinumMedalBase
      className={className}
      numeral={
        <path
          fill="#0F1F28"
          d="M15.559 17.042h-2.794l-2.706-7.337h2.519l1.584 4.939 1.584-4.94h2.519zM9.887 17.042H7.665V9.705h2.222z"
        />
      }
    />
  );
}

function PlatinumStarV({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#6FDDE7"
        d="M9.42438 17.8L4.95771 19.9583C4.17438 20.3333 3.29104 19.6917 3.40771 18.8333L4.09104 13.8083C4.13271 13.4833 4.02438 13.15 3.79938 12.9083L0.299378 9.24999C-0.300622 8.62499 0.0410447 7.58332 0.891045 7.43332L5.88271 6.53332C6.04407 6.50339 6.19669 6.4377 6.32935 6.34108C6.46201 6.24447 6.57136 6.11938 6.64938 5.97499L9.04938 1.50833C9.45771 0.749992 10.5494 0.749992 10.9577 1.50833L13.3577 5.97499C13.516 6.26666 13.7994 6.47499 14.1244 6.53332L19.116 7.43332C19.966 7.58332 20.3077 8.62499 19.7077 9.24999L16.1994 12.9083C16.0875 13.0276 16.0034 13.1702 15.953 13.3257C15.9025 13.4813 15.8871 13.6461 15.9077 13.8083L16.591 18.8333C16.7077 19.6917 15.8244 20.3333 15.041 19.9583L10.5744 17.8C10.216 17.625 9.79104 17.625 9.42438 17.8Z"
      />
      <mask id="dg_plat_v_mask" maskUnits="userSpaceOnUse" x="5" y="7" width="10" height="10" style={{ maskType: "alpha" }}>
        <rect x="5.55566" y="7.16663" width="8.88889" height="8.88889" fill="#D9D9D9" />
      </mask>
      <g mask="url(#dg_plat_v_mask)">
        <path
          fill="#0F212E"
          d="M2.77783 15.5V8H5.0445V15.5H2.77783ZM8.90283 15.5L6.13617 8H8.71116L10.3278 13.05L11.9445 8H14.5195L11.7528 15.5H8.8945H8.90283Z"
        />
      </g>
    </svg>
  );
}

function PlatinumStarVI({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#6FDDE7"
        d="M9.42438 17.8L4.95771 19.9583C4.17438 20.3333 3.29104 19.6917 3.40771 18.8333L4.09104 13.8083C4.13271 13.4833 4.02438 13.15 3.79938 12.9083L0.299378 9.24999C-0.300622 8.62499 0.0410447 7.58332 0.891045 7.43332L5.88271 6.53332C6.04407 6.50339 6.19669 6.4377 6.32935 6.34108C6.46201 6.24447 6.57136 6.11938 6.64938 5.97499L9.04938 1.50833C9.45771 0.749992 10.5494 0.749992 10.9577 1.50833L13.3577 5.97499C13.516 6.26666 13.7994 6.47499 14.1244 6.53332L19.116 7.43332C19.966 7.58332 20.3077 8.62499 19.7077 9.24999L16.1994 12.9083C16.0875 13.0276 16.0034 13.1702 15.953 13.3257C15.9025 13.4813 15.8871 13.6461 15.9077 13.8083L16.591 18.8333C16.7077 19.6917 15.8244 20.3333 15.041 19.9583L10.5744 17.8C10.216 17.625 9.79104 17.625 9.42438 17.8Z"
      />
      <mask id="dg_plat_vi_mask0" maskUnits="userSpaceOnUse" x="3" y="7" width="10" height="10" style={{ maskType: "alpha" }}>
        <rect x="3.33325" y="7.16663" width="8.88889" height="8.88889" fill="#D9D9D9" />
      </mask>
      <g mask="url(#dg_plat_vi_mask0)">
        <path
          fill="#0F212E"
          d="M0.55542 15.5V8H2.82209V15.5H0.55542ZM6.68042 15.5L3.91375 8H6.48875L8.10542 13.05L9.72209 8H12.2971L9.53042 15.5H6.67209H6.68042Z"
        />
      </g>
      <mask id="dg_plat_vi_mask1" maskUnits="userSpaceOnUse" x="11" y="7" width="5" height="10" style={{ maskType: "alpha" }}>
        <rect x="11.1111" y="7.16663" width="4.44444" height="8.88889" fill="#D9D9D9" />
      </mask>
      <g mask="url(#dg_plat_vi_mask1)">
        <path
          fill="#0F212E"
          d="M12.7778 15.5V8H15.0445V15.5H12.7778ZM18.9028 15.5L16.1362 8H18.7112L20.3278 13.05L21.9445 8H24.5195L21.7528 15.5H18.8945H18.9028Z"
        />
      </g>
    </svg>
  );
}

function DiamondGemBase({
  className,
  bars,
}: {
  className?: string;
  bars: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill="#BDE9FF" d="M79.48 19.64c-21.04 3.04-42.04 3-63 0L0 43.64 48 96l48-52.36z" />
      <path fill="#fff" d="M27.68 55.52 48 96l20.32-40.48s-23.16-7.16-40.64 0" />
      <path fill="#B0B8FC" d="M16.52 19.64S43.12 21.48 48 30.68c0 0-12.48 23.96-20.32 24.84 0 0-14.68-26.64-11.16-35.84z" />
      <path fill="#fff" d="M48 30.68 27.68 55.52h40.64z" />
      <path fill="#B0B8FC" d="M96 43.64 48 96l20.32-40.48z" />
      <path fill="#BDE9FF" d="M0 43.64 48 96 27.68 55.52z" />
      <path fill="#B0B8FC" d="m16.52 19.64 11.16 35.88L0 43.64z" />
      <path fill="#fff" d="M79.48 19.64 68.32 55.52 96 43.64zm-62.96 0L48 30.68l31.48-11.04z" />
      <path fill="#0F212E" d={bars} />
    </svg>
  );
}

function DiamondGem1({ className }: { className?: string }) {
  return <DiamondGemBase className={className} bars="M42.56 29.84h10.88v36H42.56z" />;
}

function DiamondGem2({ className }: { className?: string }) {
  return (
    <DiamondGemBase
      className={className}
      bars="M32.597 65.84v-36h10.88v36zm19.92 0v-36h10.88v36z"
    />
  );
}

function DiamondGem3({ className }: { className?: string }) {
  return (
    <DiamondGemBase
      className={className}
      bars="M22.597 65.84v-36h10.88v36zm19.92 0v-36h10.88v36zm19.92 0v-36h10.88v36z"
    />
  );
}

function DiamondGemNumeralBase({
  className,
  numeral,
  fontSize,
}: {
  className?: string;
  numeral: string;
  fontSize: number;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#BDE9FF"
        d="M14.4174 3.92456C10.7968 4.44769 7.18303 4.44081 3.57617 3.92456L0.740234 8.05456L9.00023 17.0648L17.2602 8.05456L14.4174 3.92456Z"
      />
      <path
        fill="white"
        d="M5.50293 10.0991L8.99966 17.0651L12.4964 10.0991C12.4964 10.0991 8.51095 8.867 5.50293 10.0991Z"
      />
      <path
        fill="#B0B8FC"
        d="M3.58306 3.92456C3.58306 3.92456 8.16047 4.24119 9.00024 5.82436C9.00024 5.82436 6.85264 9.94748 5.50351 10.0989C5.50351 10.0989 2.97732 5.51461 3.58306 3.93144V3.92456Z"
      />
      <path fill="white" d="M8.99966 5.82446L5.50293 10.099H12.4964L8.99966 5.82446Z" />
      <path fill="#B0B8FC" d="M17.26 8.05469L9 17.065L12.4967 10.099L17.26 8.05469Z" />
      <path fill="#BDE9FF" d="M0.740234 8.05469L9.00023 17.065L5.5035 10.099L0.740234 8.05469Z" />
      <path fill="#B0B8FC" d="M3.58305 3.92456L5.5035 10.0989L0.740234 8.05456L3.58305 3.92456Z" />
      <path
        fill="white"
        d="M14.4174 3.92456L12.4969 10.0989L17.2602 8.05456L14.4174 3.92456ZM3.58301 3.92456L9.00019 5.82436L14.4174 3.92456H3.58301Z"
      />
      <text
        x="9"
        y="12"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize={fontSize}
        fontWeight="900"
        fill="#0F212E"
      >
        {numeral}
      </text>
    </svg>
  );
}

function DiamondGem4({ className }: { className?: string }) {
  return <DiamondGemNumeralBase className={className} numeral="IV" fontSize={5.5} />;
}

function DiamondGem5({ className }: { className?: string }) {
  return <DiamondGemNumeralBase className={className} numeral="V" fontSize={6} />;
}

const DISCORD_URL = "https://discord.gg/ebgaming";

const tiers = [
  { wager: 5000, reward: 10, claimable: true, icon: BronzeMedal, vip: true },
  { wager: 10000, reward: 20, claimable: false, icon: BronzeMedal },
  { wager: 25000, reward: 25, claimable: false, icon: SilverMedal },
  { wager: 50000, reward: 50, claimable: false, icon: SilverMedal },
  { wager: 100000, reward: 100, claimable: false, icon: GoldMedal },
  { wager: 250000, reward: 200, claimable: false, icon: PlatinumMedal1 },
  { wager: 500000, reward: 500, claimable: false, icon: PlatinumMedal2 },
  { wager: 1000000, reward: 1000, claimable: false, icon: PlatinumMedal3 },
  { wager: 2500000, reward: 2000, claimable: false, icon: PlatinumMedal4 },
  { wager: 5000000, reward: 4000, claimable: false, icon: PlatinumStarV },
  { wager: 10000000, reward: 7500, claimable: false, icon: PlatinumStarVI },
  { wager: 25000000, reward: 15000, claimable: false, icon: DiamondGem1 },
  { wager: 50000000, reward: 30000, claimable: false, icon: DiamondGem2 },
  { wager: 100000000, reward: 75000, claimable: false, icon: DiamondGem3 },
  { wager: 250000000, reward: 150000, claimable: false, icon: DiamondGem4 },
  { wager: 500000000, reward: 250000, claimable: false, icon: DiamondGem5 },
];

export default function WagerTiers() {
  return (
    <div className="mx-auto mt-12 w-full max-w-3xl">
      <h2 className="mb-3 text-xl font-bold text-white">Wager Tiers</h2>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121418]">
        {tiers.map((tier) => (
          <div
            key={tier.wager}
            className="flex items-center justify-between border-b border-white/5 px-6 py-4 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <tier.icon />
              <div>
                <div className="flex flex-col-reverse items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <p className="text-sm font-bold text-white sm:text-base">
                    Wager ${tier.wager.toLocaleString()}
                  </p>
                  {tier.vip && (
                    <a
                      href={DISCORD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded bg-[#5865F2]/20 border border-[#5865F2]/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5865F2] transition-colors hover:bg-[#5865F2]/30"
                    >
                      <FaDiscord size={12} />
                      Discord VIP
                    </a>
                  )}
                </div>
                <p className="text-xs text-zinc-500 sm:hidden">
                  ${tier.reward.toLocaleString()} Reward
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="hidden text-sm font-bold text-white sm:block sm:text-base">
                ${tier.reward.toLocaleString()} Reward
              </p>

              {tier.claimable ? (
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 rounded-md bg-[#277fe4] px-4 py-2 text-center text-xs font-bold tracking-wide text-white transition-colors hover:opacity-90"
                >
                  Claim
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-24 cursor-not-allowed rounded-md bg-white/5 px-4 py-2 text-center text-xs font-bold tracking-wide text-zinc-500"
                >
                  Locked
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
