"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
];

export default function Navigation() {
  const path = usePathname();
  return (
    <header className="border-b border-[var(--color-border)] pt-12 pb-8"
      style={{ animation: "fadeIn 0.8s ease" }}>
      <div className="flex justify-between items-end">
        <div>
          <Link href="/">
            <h1 className="font-[var(--font-serif)] text-4xl font-normal tracking-tight leading-none">
              David Xu
            </h1>
          </Link>
          <p className="font-[var(--font-mono)] text-xs text-[var(--color-dim)] mt-2 tracking-wide">
            AI Data Architecture
          </p>
        </div>
        <nav className="flex gap-6">
          {links.map((l) => {
            const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href}
                className={`font-[var(--font-mono)] text-xs uppercase tracking-widest pb-2 border-b-[1.5px] transition-all ${
                  active
                    ? "text-[var(--color-accent)] border-[var(--color-accent)]"
                    : "text-[var(--color-dim)] border-transparent hover:text-[var(--color-text)]"
                }`}>
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
