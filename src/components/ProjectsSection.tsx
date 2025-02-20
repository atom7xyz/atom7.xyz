import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 'project1',
      title: 'recovery',
      href: 'https://github.com/atom7xyz/recovery',
      languages: ['kotlin', 'spring-boot', 'spigot', 'velocity', 'h2db'],
      description: "Recovery system designed to assist metamc.it support personnel in verifying users' identities, built for the Minecraft Server \"MetaMC\".",
      bgImage: 'https://www.metamc.it/img/games/vanillapuro.png'
    },
    {
      id: 'project2',
      title: 'Stone',
      href: 'https://github.com/atom7xyz/Stone',
      languages: ['java', 'spigot', 'velocity', 'jooq', 'rabbitmq', 'mysql', 'mariadb', 'postgresql'],
      description: 'A comprehensive library for Spigot and Velocity servers, streamlining plugin development with essential utilities and APIs.',
      bgColor: "#383630"
    },
    {
      id: 'project3',
      title: 'cloudnotes',
      href: 'https://github.com/atom7xyz/cloudnotes',
      languages: ['typescript', 'javascript', 'html', 'css'],
      description: 'Human-Computer Interaction project featuring a note-reading Electron application with cloud synchronization and collaborative features.',
      bgImage: 'https://atom7.xyz/share/u/C3rndxpn.png'
    },
    {
      id: 'project4',
      title: 'rss-rest-reader',
      href: 'https://github.com/atom7xyz/rss-rest-reader',
      languages: ['java', 'spring-boot'],
      description: 'RESTful API backend service for fetching and serving RSS feed data.',
      bgColor: '#383630'
    },
    {
      id: 'project5',
      title: 'Kanboard',
      href: 'https://github.com/MarkTheRealCoder/Kanboard',
      languages: ['python', 'django', 'javascript', 'html', 'css'],
      description: 'Agile project management web app implementing Scrum methodology with Kanban-style task boards and sprint planning features.',
      bgImage: 'https://atom7.xyz/share/u/mEr3PZB9.png'
    },
    {
      id: 'project6',
      title: 'Frogger',
      href: 'https://github.com/MarkTheRealCoder/Frogger',
      languages: ['c'],
      description: 'Classic Frogger game implementation in C, featuring multi-threading with shared memory and inter-process communication using pipes.',
      bgImage: 'https://atom7.xyz/share/u/xNsEcCSw.png'
    },
    {
      id: 'project7',
      title: 'WebProject (ABM)',
      href: 'https://github.com/MarkTheRealCoder/WebProject',
      languages: ['java', 'postgresql', 'javascript', 'html', 'css'],
      description: 'Full-stack web application simulating a fantasy shop, complete with user authentication, product management, and shopping cart functionality.',
      bgImage: 'https://atom7.xyz/share/u/mLRG3IhF.png'
    },
    {
      id: 'project8',
      title: 'shaded-libs',
      href: 'https://github.com/atom7xyz/shaded-libs',
      languages: ['java', 'spigot', 'velocity'],
      description: 'Collection of shaded libraries for Spigot servers and Velocity proxies, built for the Minecraft Server "MetaMC".',
      bgColor: '#383630'
    },
    {
      id: 'project9',
      title: 'SPR1D-GAME',
      href: 'https://github.com/atom7xyz/SPR1D-GAME',
      languages: ['c'],
      description: 'A simple terminal based game.',
      bgColor: '#383630'
    },
    {
      id: 'project10',
      title: 'AevyCore',
      href: 'https://github.com/atom7xyz/AevyCore',
      languages: ['java', 'spigot', 'mariadb', 'hikaricp'],
      description: 'Core library providing essential utilities and APIs for Minecraft server development, including configuration management, command handling, and plugin integration, built for the Minecraft Server "Aevy".',
      bgColor: '#383630'
    },
    {
      id: 'project11',
      title: 'i_am_still_here',
      href: 'https://github.com/atom7xyz/i_am_still_here',
      languages: ['rust'],
      description: 'Anti-AFK utility for cloud gaming platforms that bypasses application-level inactivity detection mechanisms.',
      bgImage: 'https://atom7.xyz/share/u/ilxgzVyf.png'
    },
    {
      id: 'project13',
      title: 'FarmPvP',
      href: 'https://github.com/atom7xyz/FarmPvP',
      languages: ['java', 'spigot', 'protocollib', 'jooq', 'mariadb', 'hikaricp'],
      description: 'FarmPvP minigame, built for the Minecraft Server "MetaMC".',
      bgImage: 'https://atom7.xyz/share/u/6mV3adnM.png'
    },
    {
      id: 'project14',
      title: 'Astrea',
      href: 'https://github.com/atom7xyz/Astrea',
      languages: ['java', 'spigot', 'protocollib'],
      description: 'Anti-cheat system enhancements and compatibility patches for Minecraft servers, providing improved security and seamless integration with various server configurations, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project15',
      title: 'Violet',
      href: 'https://github.com/AevyDevs/Violet',
      languages: ['java', 'velocity', 'redis', 'mysql', 'mariadb', 'hikaricp'],
      description: 'Management and addons for servers using Velocity proxy, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project16',
      title: 'heros-pre-lobby',
      href: 'https://github.com/AevyDevs/heros-pre-lobby',
      languages: ['java', 'spigot'],
      description: 'Pre-lobby system for HerosPvP with GeoBlocking and bot detection features, built for the Minecraft Server "HerosPvP".',
      bgImage: 'https://atom7.xyz/share/u/M2zQWurZ.jpg'
    },
    {
      id: 'project17',
      title: 'Splitter',
      href: 'https://github.com/AevyDevs/Splitter',
      languages: ['java', 'spigot'],
      description: 'Load balancing system for servers using Velocity proxy to distribute players across multiple lobby instances, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project18',
      title: 'database-lib',
      href: 'https://github.com/AevyDevs/database-lib',
      languages: ['java', 'hikaricp', 'mysql', 'mariadb', 'postgresql'],
      description: 'Library providing boilerplate code and easy database access, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project19',
      title: 'Camouflage',
      href: 'https://github.com/atom7xyz/Camouflage',
      languages: ['java', 'spigot', 'protocollib'],
      description: 'Anti-xray plugin utilizing concurrent raytracing algorithms to dynamically obscure blocks and prevent exploitation in 1.8 Minecraft servers, built for the Minecraft Server "MetaMC".',
      bgImage: 'https://atom7.xyz/share/u/7ZHwftxe.png'
    },
    {
      id: 'project20',
      title: 'HerosPvPBot',
      href: 'https://github.com/atom7xyz/HerosPvPBot',
      languages: ['php'],
      description: 'Telegram management bot, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project21',
      title: 'connection_blocker',
      href: 'https://github.com/atom7xyz/connection_blocker',
      languages: ['rust'],
      description: 'IP filtering and rate limiting system that automatically blocks suspicious IP addresses after multiple failed authentication attempts, enhancing security against brute force attacks in SSH.',
      bgColor: '#383630'
    },
    {
      id: 'project22',
      title: 'Pseudo-Random-Password-Generator',
      href: 'https://github.com/atom7xyz/Pseudo-Random-Password-Generator',
      languages: ['rust'],
      description: 'Terminal-based password generator with customizable complexity options.',
      bgImage: 'https://atom7.xyz/share/u/wYNIK3OX.png'
    },
    {
      id: 'project23',
      title: 'arc-backend',
      href: 'https://github.com/atom7xyz/arc-backend',
      languages: ['java'],
      description: 'Backend server for the project "Assembly STDIO".',
      bgColor: '#383630'
    },
    {
      id: 'project24',
      title: 'heros-sumo-ffa',
      href: 'https://github.com/AevyDevs/heros-sumo-ffa',
      languages: ['java', 'spigot', 'mysql', 'hikaricp'],
      description: 'Sumo-style FFA PvP minigame, built for the Minecraft Server "HerosPvP".',
      bgImage: 'https://atom7.xyz/share/u/f6t3HFHI.jpg'
    },
    {
      id: 'project25',
      title: 'heros-combo-ffa',
      href: 'https://github.com/AevyDevs/heros-combo-ffa',
      languages: ['java', 'spigot', 'mysql', 'hikaricp'],
      description: 'Combo-style FFA PvP minigame, built for the Minecraft Server "HerosPvP".',
      bgImage: 'https://atom7.xyz/share/u/sPWUUBWT.jpg'
    },
    {
      id: 'project26',
      title: 'heros-base-ffa',
      href: 'https://github.com/AevyDevs/heros-base-ffa',
      languages: ['java', 'spigot', 'mysql', 'hikaricp'],
      description: 'Base library for FFA minigames, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project27',
      title: 'heros-velocity-addons',
      href: 'https://github.com/AevyDevs/heros-velocity-addons',
      languages: ['java', 'velocity', 'mysql', 'redis', 'hikaricp'],
      description: 'Proxy utilities and addons, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project28',
      title: 'heros-firewall',
      href: 'https://github.com/AevyDevs/heros-firewall',
      languages: ['java', 'spigot'],
      description: 'Network securing system via disallowing access to certain ports, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project29',
      title: 'heros-blacklist',
      href: 'https://github.com/AevyDevs/heros-blacklist',
      languages: ['java', 'spigot'],
      description: 'Player restriction system, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    },
    {
      id: 'project30',
      title: 'heros-antigrief',
      href: 'https://github.com/AevyDevs/heros-antigrief',
      languages: ['java', 'spigot'],
      description: 'Grief prevention protections, built for the Minecraft Server "HerosPvP".',
      bgColor: '#383630'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title highlight">My Projects</h2>
      <div className="projects">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 