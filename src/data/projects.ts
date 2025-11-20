export type ProjectStatus = "live" | "demo" | "static" | "wip";
export type ProjectType = "web" | "download" | "bot" | "showcase";

export interface ProjectLink {
  label: "Demo" | "GitHub" | "Docs" | "Download";
  href: string;
  external?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  status: ProjectStatus;
  kind: ProjectType;
  tech: string[];
  image?: string; // relative path in /assets, optional
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "securechat",
    title: "SecureChat",
    blurb:
      "Realtime chat app with WebSockets, auth, typing indicators, and file sharing. Currently a static demo with code walkthrough.",
    status: "demo",
    kind: "web",
    tech: ["React", "Tailwind", "Quart", "WebSockets", "MySQL"],
    image: "/assets/securechat.jpg",
    links: [
      { label: "Demo", href: "https://securechat.josegonzalez.dev", external: true },
      { label: "GitHub", href: "https://github.com/whojosegonzalez/securechat", external: true },
    ],
  },
  {
    slug: "movie-aggregator",
    title: "Movie Aggregator",
    blurb:
      "MapReduce/Hadoop project aggregating MovieLens ratings into insights. Static write-up with screenshots and outputs.",
    status: "static",
    kind: "showcase",
    tech: ["Java", "Hadoop", "MapReduce"],
    image: "/assets/movie-aggregator.jpg",
    links: [
      { label: "Docs", href: "/movieaggregator" },
      { label: "GitHub", href: "https://github.com/whojosegonzalez/<movie-aggregator-repo>", external: true },
    ],
  },
  {
    slug: "minuteflow",
    title: "MinuteFlow",
    blurb:
      "Windows desktop app for construction meeting minutes: templates, agendas, PDF exports, organized folders.",
    status: "demo",
    kind: "download",
    tech: ["Windows", "Python/Node", "Docx/PDF"],
    image: "/assets/minuteflow.jpg",
    links: [
      { label: "Download", href: "https://github.com/whojosegonzalez/minuteflow/releases", external: true },
      { label: "GitHub", href: "https://github.com/whojosegonzalez/minuteflow", external: true },
    ],
  },
  {
    slug: "nexustrade",
    title: "NeXusTrade",
    blurb:
      "Automated Solana altcoin trading bot with token scanning, scoring and strategy backtesting. WIP — devlog + screenshots.",
    status: "wip",
    kind: "bot",
    tech: ["TypeScript", "Solana APIs", "Node"],
    image: "/assets/nexustrade.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/whojosegonzalez/nexustrade", external: true },
      { label: "Docs", href: "/nexustrade" },
    ],
  },
];
