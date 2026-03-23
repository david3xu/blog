export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    name: "Datacore MCP Server",
    description: "Cross-agent memory layer — MCP server with log_event, search, and get_tasks tools. 4 AI apps from 4 companies share one data store.",
    tech: ["JavaScript", "MCP SDK", "Node.js", "JSONL"],
    link: "#",
    emoji: "◆",
  },
  {
    name: "OpenClaw Contributions",
    description: "3 bug fixes on fork for the 247K-star AI gateway — macOS platform enum, cross-provider model fallback, rate limit handling.",
    tech: ["TypeScript", "Node.js", "MCP"],
    link: "https://github.com/david3xu/openclaw",
    emoji: "🦞",
  },
  {
    name: "WA Health ED Pipeline",
    description: "PySpark medallion pipeline on Microsoft Fabric. Ingests hospital data through Bronze/Silver/Gold Delta Lake layers.",
    tech: ["PySpark", "Delta Lake", "Microsoft Fabric"],
    link: "https://github.com/david3xu/wa-health-ed-pipeline",
    emoji: "🏥",
  },
];
