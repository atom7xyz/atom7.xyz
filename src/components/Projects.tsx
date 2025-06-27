import { ProjectCard } from './ProjectCard'

const projects = [
  {
    title: "antlr-impl",
    description: "Lexer, parser, semantic analyzer and interpreter via CLI for IJVM and 8088.",
    technologies: ["Java", "ANTLR", "JUnit", "Lombok", "Maven"],
    projectUrl: "https://github.com/atom7xyz/antlr-impl",
  },
  {
    title: "sharex-spring",
    description: "A self-hosted server for ShareX, supporting image uploads, text sharing, file hosting, and URL shortening.",
    technologies: ["Kotlin", "Spring Boot", "Spring JPA", "PostgreSQL", "Caffeine", "Gradle"],
    projectUrl: "https://github.com/atom7xyz/sharex-spring",
  },
  {
    title: "ddcocbot",
    description: "Telegram bot for Clash of Clans.",
    technologies: ["TypeScript", "Drizzle ORM", "PostgreSQL", "Telegram API"],
    projectUrl: "https://github.com/atom7xyz/ddcocbot",
  },
  {
    title: "atom7.xyz",
    description: "This very website.",
    technologies: ["TypeScript", "Tailwind CSS", "Shadcn UI", "React"],
    projectUrl: "https://github.com/atom7xyz/atom7.xyz",
  },
  {
    title: "recovery",
    description: "Recovery system designed to assist metamc.it support personnel in verifying users' identities, built for the Minecraft Server \"MetaMC\".",
    technologies: ["Kotlin", "Spring Boot", "Spring JPA", "Spigot", "Velocity", "H2DB", "Gradle"],
    projectUrl: "https://github.com/atom7xyz/recovery"
  },
  {
    title: "Stone",
    description: "A comprehensive library for Spigot and Velocity servers, streamlining plugin development with essential utilities and APIs.",
    technologies: ["Java", "Spigot", "Velocity", "Jooq", "RabbitMQ", "Maven"],
    projectUrl: "https://github.com/atom7xyz/Stone"
  },
  {
    title: "cloudnotes",
    description: "Human-Computer Interaction project featuring a note-reading Electron application with cloud synchronization and collaborative features.",
    technologies: ["TypeScript", "JavaScript", "HTML", "CSS", "ElectronJS"],
    projectUrl: "https://github.com/atom7xyz/cloudnotes",
    imageUrl: "https://atom7.xyz/share/u/DPxh6CEm.png"
  },
  {
    title: "rss-rest-reader",
    description: "RESTful API backend service for fetching and serving RSS feed data.",
    technologies: ["Java", "Spring Boot", "Maven"],
    projectUrl: "https://github.com/atom7xyz/rss-rest-reader"
  },
  {
    title: "Kanboard",
    description: "Agile project management web app implementing Scrum methodology with Kanban-style task boards and sprint planning features.",
    technologies: ["Python", "Django", "JavaScript", "HTML", "CSS"],
    projectUrl: "https://github.com/MarkTheRealCoder/Kanboard",
    imageUrl: "https://atom7.xyz/share/u/mEr3PZB9.png"
  },
  {
    title: "Frogger",
    description: "Classic Frogger game implementation in C, featuring multi-threading with shared memory and inter-process communication using pipes.",
    technologies: ["C"],
    projectUrl: "https://github.com/MarkTheRealCoder/Frogger",
    imageUrl: "https://atom7.xyz/share/u/xNsEcCSw.png"
  },
  {
    title: "WebProject (ABM)",
    description: "Full-stack web application simulating a fantasy shop, complete with user authentication, product management, and shopping cart functionality.",
    technologies: ["Java", "PostgreSQL", "JavaScript", "HTML", "CSS"],
    projectUrl: "https://github.com/MarkTheRealCoder/WebProject",
    imageUrl: "https://atom7.xyz/share/u/mLRG3IhF.png"
  },
  {
    title: "shaded-libs",
    description: "Collection of shaded libraries for Spigot servers and Velocity proxies, built for the Minecraft Server \"MetaMC\".",
    technologies: ["Java", "Spigot", "Velocity", "Gradle"],
    projectUrl: "https://github.com/atom7xyz/shaded-libs",
  },
  {
    title: "SPR1D-GAME",
    description: "A simple terminal based game.", 
    technologies: ["C"],  
    projectUrl: "https://github.com/atom7xyz/SPR1D-GAME",
  },
  {
    title: "AevyCore",
    description: "Core library providing essential utilities and APIs for Minecraft server development, including configuration management, command handling, and plugin integration, built for the Minecraft Server \"Aevy\".",  
    technologies: ["Java", "Spigot", "MariaDB", "HikariCP", "Maven"],
    projectUrl: "https://github.com/atom7xyz/AevyCore",
  },
  {
    title: "i_am_still_here",
    description: "Anti-AFK utility for cloud gaming platforms that bypasses application-level inactivity detection mechanisms.",
    technologies: ["Rust"],
    projectUrl: "https://github.com/atom7xyz/i_am_still_here",
    //imageUrl: "https://atom7.xyz/share/u/ilxgzVyf.png"
  },
  {
    title: "heros-core",
    description: "Core library providing essential utilities and APIs for Minecraft server development, including configuration management, command handling, and plugin integration, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot", "MariaDB", "HikariCP", "Maven"],
    projectUrl: "https://github.com/atom7xyz/heros-core",
  },
  {
    title: "FarmPvP",
    description: "FarmPvP minigame, built for the Minecraft Server \"MetaMC\".",
    technologies: ["Java", "Spigot", "ProtocolLib", "Jooq", "MariaDB", "HikariCP", "Maven"],
    projectUrl: "https://github.com/atom7xyz/FarmPvP",
    imageUrl: "https://atom7.xyz/share/u/6mV3adnM.png"
  },
  {
    title: "Astrea",
    description: "Anti-cheat system enhancements and compatibility patches for Minecraft servers, providing improved security and seamless integration with various server configurations, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot", "ProtocolLib", "Maven"],
    projectUrl: "https://github.com/atom7xyz/Astrea",
  },
  {
    title: "Violet",
    description: "Management and addons for servers using Velocity proxy, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Velocity", "Redis", "MySQL", "MariaDB", "HikariCP", "Maven"],
    projectUrl: "https://github.com/AevyDevs/Violet",
  },
  {
    title: "heros-pre-lobby",
    description: "Pre-lobby system for HerosPvP with GeoBlocking and bot detection features, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot", "Maven"],
    projectUrl: "https://github.com/AevyDevs/heros-pre-lobby",
    imageUrl: "https://atom7.xyz/share/u/M2zQWurZ.jpg"
  },
  {
    title: "Splitter",
    description: "Load balancing system for servers using Velocity proxy to distribute players across multiple lobby instances, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot", "Maven"],
    projectUrl: "https://github.com/AevyDevs/Splitter",
  },
  {
    title: "database-lib",
    description: "Library providing boilerplate code and easy database access, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "HikariCP", "MySQL", "MariaDB", "PostgreSQL", "Maven"],
    projectUrl: "https://github.com/AevyDevs/database-lib",
  },
  {
    title: "Camouflage",
    description: "Anti-xray plugin utilizing concurrent raytracing algorithms to dynamically obscure blocks and prevent exploitation in 1.8 Minecraft servers, built for the Minecraft Server \"MetaMC\".",
    technologies: ["Java", "Spigot", "ProtocolLib", "Maven"],
    projectUrl: "https://github.com/atom7xyz/Camouflage",
    imageUrl: "https://atom7.xyz/share/u/7ZHwftxe.png"
  },
  {
    title: "HerosPvPBot",
    description: "Telegram management bot, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["PHP"],  
    projectUrl: "https://github.com/AevyDevs/HerosPvPBot",
  },
  {
    title: "connection_blocker",
    description: "IP filtering and rate limiting system that automatically blocks suspicious IP addresses after multiple failed authentication attempts, enhancing security against brute force attacks in SSH.",
    technologies: ["Rust"],
    projectUrl: "https://github.com/atom7xyz/connection_blocker",
  },
  {
    title: "Pseudo-Random-Password-Generator",  
    description: "Terminal-based password generator with customizable complexity options.",
    technologies: ["Rust"],
    projectUrl: "https://github.com/atom7xyz/Pseudo-Random-Password-Generator",
    imageUrl: "https://atom7.xyz/share/u/wYNIK3OX.png"
  },
  { 
    title: "arc-backend",
    description: "First version of the backend for the project \"Assembly STDIO\".",
    technologies: ["Java", "Maven"],
    projectUrl: "https://github.com/atom7xyz/arc-backend",
  },  
  {
    title: "heros-sumo-ffa",
    description: "Sumo-style FFA PvP minigame, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot", "Maven"],
    projectUrl: "https://github.com/AevyDevs/heros-sumo-ffa",
    imageUrl: "https://atom7.xyz/share/u/f6t3HFHI.jpg"
  },    
  {
    title: "heros-combo-ffa",
    description: "Combo-style FFA PvP minigame, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot", "Maven"],
    projectUrl: "https://github.com/AevyDevs/heros-combo-ffa",
    imageUrl: "https://atom7.xyz/share/u/sPWUUBWT.jpg"
  },    
  {
    title: "heros-base-ffa",
    description: "Base library for FFA minigames, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot", "Maven"],
    projectUrl: "https://github.com/AevyDevs/heros-base-ffa",
  },  
  {
    title: "heros-velocity-addons",
    description: "Proxy utilities and addons, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Velocity", "Maven"],
    projectUrl: "https://github.com/AevyDevs/heros-velocity-addons",
  },  
  {
    title: "heros-firewall",
    description: "Network securing system via disallowing access to certain ports, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot", "Maven"],
    projectUrl: "https://github.com/AevyDevs/heros-firewall",
  },  
  {
    title: "heros-blacklist",
    description: "Player restriction system, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot"],
    projectUrl: "https://github.com/AevyDevs/heros-blacklist",
  },      
  {
    title: "heros-antigrief",
    description: "Grief prevention protections, built for the Minecraft Server \"HerosPvP\".",
    technologies: ["Java", "Spigot"],
    projectUrl: "https://github.com/AevyDevs/heros-antigrief",
  }
]             

export function Projects() {
  return (
    <section id="projects" className="container py-16 md:py-24 mx-auto select-none px-4">
      <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-5xl mx-auto">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-base md:text-xl px-4">
            Open source projects I've worked on, including commercial ones, from libraries to full-stack applications.
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              projectUrl={project.projectUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 