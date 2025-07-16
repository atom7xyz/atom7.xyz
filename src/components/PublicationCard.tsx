import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Calendar } from 'lucide-react'
import { TechnologyBadge } from './common/TechnologyBadge'
import { ANIMATION_CLASSES } from '../utils/constants'

interface PublicationCardProps {
  title: string
  abstract: string
  technologies: string[]
  publicationDate: string
  downloadUrl?: string
  type: 'whitepaper' | 'article' | 'research' | 'technical-report' | 'technical-paper'
}

export function PublicationCard({ 
  title, 
  abstract, 
  technologies, 
  publicationDate,
  downloadUrl,
  type
}: PublicationCardProps) {
  const handleClick = () => {
    const url = downloadUrl
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'whitepaper': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'article': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'research': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'technical-report': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      case 'technical-paper': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <Card 
      className={`cursor-pointer ${ANIMATION_CLASSES.HOVER_LIFT} select-none`}
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row p-6">
        <div className="flex-1">
          <CardHeader className="pb-3 p-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge className={`text-xs px-3 py-1 font-medium rounded-full ${getTypeColor(type)}`}>
                {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {publicationDate}
              </div>
            </div>
            <CardTitle className="text-xl font-semibold text-left mb-3">{title}</CardTitle>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {technologies.map((tech) => (
                <TechnologyBadge 
                  key={tech} 
                  technology={tech}
                  size="medium"
                />
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <CardDescription className="text-sm text-muted-foreground text-left">
              {abstract}
            </CardDescription>
          </CardContent>
        </div>
      </div>
    </Card>
  )
} 