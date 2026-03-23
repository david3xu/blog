import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-8">
      <Navigation />
      <main className="py-12">
        <h2 className="font-[var(--font-serif)] text-3xl font-normal mb-2"
          style={{ animation: "fadeIn 0.5s ease" }}>
          Projects
        </h2>
        <p className="text-[var(--color-dim)] text-sm mb-8"
          style={{ animation: "fadeIn 0.6s ease" }}>
          AI infrastructure and data engineering — open source.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
