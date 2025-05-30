import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { getTechColor } from '../utils/techColors'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  projectUrl: string
  imageUrl?: string
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  projectUrl,
  imageUrl
}: ProjectCardProps) {
  const handleClick = () => {
    window.open(projectUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card 
      className="flex flex-col min-h-60 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden select-none"
      onClick={handleClick}
    >
      {imageUrl && (
        <div className="absolute inset-0 opacity-30">
          <img 
            src={imageUrl} 
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col p-6 md:p-8">
        <CardHeader className="pb-3 text-left p-0">
          <CardTitle className="text-xl font-semibold text-left">{title}</CardTitle>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                className={`text-xs px-3 py-1 font-bold rounded-full ${getTechColor(tech)}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-1 pt-0 text-left p-0 mt-3">
          <CardDescription className="text-muted-foreground leading-relaxed text-left">
            {description}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  )
} 