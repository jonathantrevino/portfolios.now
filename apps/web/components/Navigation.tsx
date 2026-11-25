import Image from "next/image";
import Link from "next/link";
import { Button, ButtonLink } from "./Button";
import { Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav className="max-w-300 h-18 mx-auto flex justify-between items-center gap-20 px-6">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex gap-2.5 items-center">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="portfolios.now logo"
          />
          <p className="font-heading text-ink! text-[21px] font-bold">
            portfolios.now
          </p>
        </Link>
        <li className="md:flex hidden gap-4 list-none font-sans font-medium text-[15px]">
          <Link href="/companies" className="text-ink!">
            Companies
          </Link>
          <Link href="/blog" className="text-ink!">
            Blog
          </Link>
          <Link href="/about" className="text-ink!">
            About
          </Link>
        </li>
      </div>
      <div className="flex gap-2">
        <ButtonLink href="/submit-portfolio">Submit Portfolio</ButtonLink>
        <Button variant="ghost" className="md:hidden block">
          <Menu size={18} />
        </Button>
      </div>
    </nav>
  );
}
