import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { TechnologyBadge } from './common/TechnologyBadge'
import { ANIMATION_CLASSES } from '../utils/constants'

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
      className={`flex flex-col min-h-60 cursor-pointer ${ANIMATION_CLASSES.HOVER_LIFT} relative overflow-hidden select-none`}
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
              <TechnologyBadge 
                key={tech} 
                technology={tech}
                size="medium"
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-1 pt-0 text-left p-0 mt-3">
          <CardDescription className="text-muted-foreground text-left">
            {description}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  )
} 