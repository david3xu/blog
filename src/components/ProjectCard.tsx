import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <a href={project.link} target={project.link !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block p-6 border border-[var(--color-border)] rounded-sm
        hover:border-[var(--color-accent)] transition-colors"
      style={{ animation: `fadeSlideUp 0.5s ease forwards`, animationDelay: `${0.3 + index * 0.1}s`, opacity: 0 }}>
      <div className="text-2xl mb-3">{project.emoji}</div>
      <h3 className="font-[var(--font-serif)] text-xl font-normal mb-1.5">
        {project.name}
      </h3>
      <p className="text-sm text-[var(--color-dim)] mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex gap-1.5 flex-wrap">
        {project.tech.map(t => (
          <span key={t} className="font-[var(--font-mono)] text-[0.65rem] px-1.5 py-0.5
            bg-[var(--color-surface)] text-[var(--color-dim)] rounded-sm tracking-wide">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
