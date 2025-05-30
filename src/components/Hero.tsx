import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Github, Linkedin, Mail } from 'lucide-react'
import { getTechColor } from '../utils/techColors'

export function Hero() {
  const technologies = [
    'Java', 'Kotlin', 'C', 'TypeScript', 'JavaScript', 'Rust', 'PHP', 'Python', 'HTML', 'CSS', 'SQL',
    'PostgreSQL', 'MySQL', 'MariaDB', 'H2DB', 'Redis',
    'Drizzle ORM', 'Hibernate ORM', 'Jooq',
    'HikariCP', 'Caffeine', 'RabbitMQ',
    'Spring Boot', 'Spring JPA', 'Django', 'React', 'Tailwind CSS', 'Shadcn UI',
    'Spigot', 'Velocity', 'ProtocolLib', 'Telegram API',
    'JUnit', 'ANTLR', 'Lombok',
    'Git', 'Maven', 'Gradle',
    'Docker', 'ElectronJS'
  ]

  return (
    <section id="about" className="container py-16 md:py-24 lg:py-32 mx-auto select-none px-4">
      <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-primary">Anton</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-base md:text-xl px-4">
            Java Developer since 2019, Computer Science Major.
            Interested in building libraries, back-end systems and exploring modern technologies for commercial use.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center px-4">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              className={`px-2 py-1 sm:px-3 sm:py-1 font-bold rounded-full text-xs ${getTechColor(tech)}`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
          <Button variant="outline" size="lg" asChild className="p-3 w-28">
            <a href="https://github.com/atom7xyz" target="_blank" rel="noopener noreferrer">
              <Github />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="p-3 w-28">
            <a href="https://www.linkedin.com/in/antonio-m-03a65731a" target="_blank" rel="noopener noreferrer">
              <Linkedin />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="p-3 w-28">
            <a href="mailto:cubedtop@gmail.com">
              <Mail />
              Mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
} 