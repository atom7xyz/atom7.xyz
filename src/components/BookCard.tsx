import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { ANIMATION_CLASSES } from '../utils/constants'

interface BookCardProps {
  title: string
  authors: string[]
  coverUrl: string
}

export function BookCard({ 
  title, 
  authors, 
  coverUrl
}: BookCardProps) {
  return (
    <Card 
      className={`flex flex-col ${ANIMATION_CLASSES.HOVER_LIFT} select-none`}
    >
      <div className="relative">
        <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
          <img 
            src={coverUrl} 
            alt={`Cover of ${title}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      
      <CardContent className="flex-1 p-4 text-center">
        <CardTitle className="text-sm font-semibold mb-2 line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          {authors.join(', ')}
        </CardDescription>
      </CardContent>
    </Card>
  )
} 