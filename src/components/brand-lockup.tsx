import Image from "next/image";

type BrandLockupProps = {
  compact?: boolean;
  tone?: "light" | "dark";
};

export function BrandLockup({
  compact = false,
  tone = "light",
}: BrandLockupProps) {
  return (
    <span
      className={`brand-lockup${compact ? " brand-lockup--compact" : ""}`}
    >
      <Image
        className="brand-lockup__image"
        src={tone === "dark" ? "/logo-full-2_dark.png" : "/logo-full.png"}
        alt="SSAI"
        width={218}
        height={82}
        sizes={compact ? "88px" : "112px"}
        priority={compact && tone === "light"}
      />
    </span>
  );
}
