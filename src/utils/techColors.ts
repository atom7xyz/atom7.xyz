export const getTechColor = (tech: string): string => {
  const techColors: Record<string, string> = {

    'Java': 'bg-orange-700 text-white hover:bg-orange-800',
    'Kotlin': 'bg-purple-600 text-white hover:bg-purple-700',
    'C': 'bg-gray-800 text-white hover:bg-gray-900',
    'TypeScript': 'bg-blue-700 text-white hover:bg-blue-800',
    'JavaScript': 'bg-yellow-600 text-white hover:bg-yellow-700',
    'Rust': 'bg-orange-500 text-white hover:bg-orange-600',
    'PHP': 'bg-purple-600 text-white hover:bg-purple-700',
    'Python': 'bg-blue-600 text-white hover:bg-blue-700',
    'HTML': 'bg-orange-600 text-white hover:bg-orange-700',
    'CSS': 'bg-blue-600 text-white hover:bg-blue-700',
    'SQL': 'bg-orange-600 text-white hover:bg-orange-700',

    'PostgreSQL': 'bg-blue-800 text-white hover:bg-blue-900',
    'MySQL': 'bg-blue-800 text-white hover:bg-blue-900',
    'MariaDB': 'bg-blue-800 text-white hover:bg-blue-900',
    'H2DB': 'bg-blue-800 text-white hover:bg-blue-900',
    'Redis': 'bg-red-600 text-white hover:bg-red-700',
    'HikariCP': 'bg-rose-800 text-white hover:bg-rose-900',
    'Drizzle ORM': 'bg-indigo-700 text-white hover:bg-indigo-800',
    'Hibernate ORM': 'bg-indigo-700 text-white hover:bg-indigo-800',

    'React': 'bg-cyan-600 text-white hover:bg-cyan-700',
    
    'Django': 'bg-green-800 text-white hover:bg-green-900',
    'Spring Boot': 'bg-green-700 text-white hover:bg-green-800',
    'Spring JPA': 'bg-green-700 text-white hover:bg-green-800',
    'Spring Validation': 'bg-green-700 text-white hover:bg-green-800',
    'Spring Security': 'bg-green-700 text-white hover:bg-green-800',
    'Spring AOP': 'bg-green-700 text-white hover:bg-green-800',
    'Jooq': 'bg-blue-800 text-white hover:bg-blue-900',
    'RabbitMQ': 'bg-orange-800 text-white hover:bg-orange-900',
    'Caffeine': 'bg-orange-800 text-white hover:bg-orange-900',
    
    'Spigot': 'bg-amber-800 text-white hover:bg-amber-900',
    'Velocity': 'bg-amber-800 text-white hover:bg-amber-900',
    'ProtocolLib': 'bg-amber-800 text-white hover:bg-amber-900',
    'Telegram API': 'bg-blue-800 text-white hover:bg-blue-900',
    
    'Tailwind CSS': 'bg-teal-600 text-white hover:bg-teal-700',
    'Shadcn UI': 'bg-teal-600 text-white hover:bg-teal-700',
    
    'Git': 'bg-red-700 text-white hover:bg-red-800',
    'Docker': 'bg-blue-700 text-white hover:bg-blue-800',
    'ElectronJS': 'bg-gray-800 text-white hover:bg-gray-900',
    
    'Maven': 'bg-red-700 text-white hover:bg-red-800',
    'Gradle': 'bg-red-700 text-white hover:bg-red-800',

    'ANTLR': 'bg-lime-800 text-white hover:bg-lime-900',
    'JUnit': 'bg-lime-800 text-white hover:bg-lime-900',
    'Lombok': 'bg-lime-800 text-white hover:bg-lime-900',
  }
  
  return techColors[tech] || 'bg-gray-600 text-white hover:bg-gray-700'
} 