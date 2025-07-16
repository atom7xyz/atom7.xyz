import { CONTAINER_CLASSES, SECTION_SPACING, RESPONSIVE_CLASSES } from '../../utils/constants'

interface SectionLayoutProps {
  id?: string
  children: React.ReactNode
  className?: string
  spacing?: 'default' | 'hero'
  maxWidth?: 'default' | 'wide' | 'narrow'
}

const maxWidthClasses = {
  default: 'max-w-5xl',
  wide: 'max-w-6xl', 
  narrow: 'max-w-4xl',
} as const

const spacingClasses = {
  default: SECTION_SPACING,
  hero: 'py-16 md:py-24 lg:py-32',
} as const

export function SectionLayout({ 
  id, 
  children, 
  className = '', 
  spacing = 'default',
  maxWidth = 'default'
}: SectionLayoutProps) {
  const maxWidthClass = maxWidthClasses[maxWidth]
  const spacingClass = spacingClasses[spacing]
  
  return (
    <section 
      id={id}
      className={`${CONTAINER_CLASSES} ${spacingClass} select-none ${className}`}
    >
      <div className={`${RESPONSIVE_CLASSES.FLEX.CENTER} ${RESPONSIVE_CLASSES.SPACING.SECTION_Y} ${maxWidthClass} mx-auto`}>
        {children}
      </div>
    </section>
  )
} 