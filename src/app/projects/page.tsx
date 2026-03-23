import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-8">
      <Navigation />
      <main className="py-12">
        <h2 className="font-[var(--font-serif)] text-3xl font-normal mb-2"
          style={{ animation: "fadeIn 0.5s ease" }}>
          Projects
        </h2>
        <p className="text-[var(--color-dim)] text-sm mb-10"
          style={{ animation: "fadeIn 0.6s ease" }}>
          Problems I&apos;m solving — and what I built.
        </p>
        {categories.map((cat) => (
          <section key={cat} className="mb-12">
            <h3 className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4"
              style={{ animation: "fadeIn 0.5s ease" }}>
              {cat}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {projects.filter(p => p.category === cat).map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
