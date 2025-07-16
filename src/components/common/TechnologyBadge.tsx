import { Badge } from '../ui/badge'
import { getTechColor } from '../../utils/techColors'

interface TechnologyBadgeProps {
  technology: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const sizeClasses = {
  small: 'text-xs px-2 py-1',
  medium: 'text-xs px-3 py-1',
  large: 'px-2 py-1 sm:px-3 sm:py-1 text-xs',
} as const

export function TechnologyBadge({ 
  technology, 
  className = '', 
  size = 'medium' 
}: TechnologyBadgeProps) {
  const sizeClass = sizeClasses[size]
  
  return (
    <Badge 
      className={`${sizeClass} font-bold rounded-full ${getTechColor(technology)} ${className}`}
    >
      {technology}
    </Badge>
  )
} 