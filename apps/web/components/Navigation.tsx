"use client";

import Link from "next/link";
import { Button, ButtonLink } from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Wordmark } from "./Wordmark";

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/companies", label: "Companies" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];
  return (
    <div className="md:hidden block">
      <Button variant="ghost" onClick={() => setOpen(!open)}>
        <Menu size={18} />
      </Button>
      {open && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-white px-6 flex flex-col">
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center h-18">
              <Wordmark />

              <Button variant="ghost" onClick={() => setOpen(!open)}>
                <X size={18} />
              </Button>
            </div>
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="flex min-h-14 items-center rounded-xl px-3 font-heading text-[26px] font-semibold tracking-[-0.02em] text-ink hover:bg-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-8">
            <ButtonLink
              variant="primary"
              href="/submit-portfolio"
              className="w-full!"
            >
              Submit Portfolio
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  return (
    <nav className="max-w-300 h-18 mx-auto flex justify-between items-center gap-20 px-6">
      <div className="flex items-center gap-10">
        <Wordmark />
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
        <MobileNavigation />
      </div>
    </nav>
  );
}
