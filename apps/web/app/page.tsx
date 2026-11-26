import { Search } from "lucide-react";
import { Hero } from "../components/Hero";
import { Input } from "../components/Input";
import { Navigation } from "../components/Navigation";
import { Button, ButtonLink } from "../components/Button";

export default function Home() {
  const links = [
    { label: "All", href: "/" },
    { label: "Product Design", href: "?role=product-design" },
    { label: "Brand Design", href: "?role=brand-design" },
    { label: "Development", href: "?role=development" },
    { label: "Illustration", href: "?role=illustration" },
    { label: "Motion", href: "?role=motion" },
    { label: "Photography", href: "?role=photography" },
  ];

  return (
    <div>
      <Navigation />
      <header className="max-w-300 mx-auto px-6 pt-22 pb-14">
        <Hero
          title="Portfolio inspiration from designers, developers and creatives"
          description="Browse personal portfolio websites by role, or search for a person or company by name."
        />
        <div className="max-w-190 flex items-center gap-2 mt-6">
          <Input
            label={null}
            icon={<Search size={18} />}
            placeholder="Search by name, company or role"
            className="mt-0! flex-1"
          />
          <Button>Search</Button>
        </div>
        <div className="flex gap-2 mt-6">
          {links.map((link, index) => (
            <ButtonLink
              key={index}
              size={"sm"}
              href={link.href}
              variant={index === 0 ? "primary" : "secondary"}
              className="rounded-full!"
            >
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </header>
    </div>
  );
}
