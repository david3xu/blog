export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    name: "OpenClaw Contributions",
    description: "3 bug fixes + LinkedIn extension for the 247K-star AI gateway",
    tech: ["TypeScript", "Node.js"],
    link: "https://github.com/david3xu/openclaw",
    emoji: "🦞",
  },
  {
    name: "Datacore",
    description: "Cross-platform personal data layer using Medallion Architecture",
    tech: ["Delta Lake", "Python", "Azure"],
    link: "#",
    emoji: "◆",
  },
  {
    name: "AzureConflux",
    description: "OpenClaw philosophy reimagined as Azure-native AI gateway",
    tech: [".NET 8", "Semantic Kernel", "Azure"],
    link: "#",
    emoji: "◈",
  },
];
