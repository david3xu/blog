export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  emoji: string;
  category: string;
}

export const projects: Project[] = [
  {
    category: "Agent memory",
    name: "Datacore MCP Server",
    description: "The problem: AI apps can't see each other's work. The solution: one MCP server, every AI reads and writes to it. 20,000+ events from 15 sources, 4 companies' AI tools connected.",
    tech: ["JavaScript", "MCP SDK", "Node.js", "JSONL"],
    link: "#",
    emoji: "◆",
  },
  {
    category: "Agent memory",
    name: "Memory architecture",
    description: "The problem: every AI wastes tokens loading context it doesn't need. The solution: 4 layers — Identity, Working, Project, Shared. As shared memory matures, private memory shrinks from 6000 to 500 tokens.",
    tech: ["Architecture", "Design"],
    link: "#",
    emoji: "◇",
  },
  {
    category: "Data pipelines",
    name: "WA Health ED Pipeline",
    description: "Medallion pipeline on Microsoft Fabric. Hospital data through Bronze/Silver/Gold Delta Lake layers with quality tests.",
    tech: ["PySpark", "Delta Lake", "Microsoft Fabric"],
    link: "https://github.com/david3xu/wa-health-ed-pipeline",
    emoji: "◆",
  },
  {
    category: "Data pipelines",
    name: "Datacore → Azure",
    description: "Local Bronze store migrating to ADLS Gen2 + Databricks. Auto Loader ingestion, Lakeflow pipelines, Vector Search. Designed, not yet deployed.",
    tech: ["Azure", "Databricks", "Delta Lake"],
    link: "#",
    emoji: "◇",
  },
];

export const categories = [...new Set(projects.map(p => p.category))];
