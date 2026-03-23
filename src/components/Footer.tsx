const socials = [
  { label: "GitHub", url: "https://github.com/david3xu" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/david-xu-809a90240/" },
  { label: "DEV.to", url: "https://dev.to/david3xu" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-12 py-10
      flex justify-between items-center">
      <span className="font-[var(--font-mono)] text-[0.72rem] text-[var(--color-dim)] tracking-wide">
        © 2026 David Xu
      </span>
      <div className="flex gap-6">
        {socials.map(l => (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
            className="font-[var(--font-mono)] text-[0.72rem] text-[var(--color-dim)]
              hover:text-[var(--color-accent)] transition-colors tracking-wide">
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
