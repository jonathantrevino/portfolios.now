import Image from "next/image";
import Link from "next/link";

export function TopWordmark() {
  return (
    <div className="flex items-center px-6 h-18">
      <Wordmark />
    </div>
  );
}

export function Wordmark() {
  return (
    <Link href="/" className="flex gap-2.5 items-center">
      <Image src="/logo.svg" width={32} height={32} alt="portfolios.now logo" />
      <p className="font-heading text-ink! text-[21px] font-bold">
        portfolios.now
      </p>
    </Link>
  );
}
