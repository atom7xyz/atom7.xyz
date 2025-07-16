// UI Constants
export const CONTAINER_CLASSES = 'container mx-auto px-4'
export const SECTION_SPACING = 'py-16 md:py-24'
export const HERO_SPACING = 'py-16 md:py-24 lg:py-32'

// Loading skeleton counts
export const SKELETON_COUNTS = {
  NAVIGATION_ITEMS: 4,
  TECHNOLOGY_BADGES: 8,
  SOCIAL_BUTTONS: 3,
  PROJECT_CARDS: 6,
  PUBLICATION_CARDS: 2,
} as const

// Responsive classes for common patterns
export const RESPONSIVE_CLASSES = {
  GRID_COLS_2: 'grid-cols-1 md:grid-cols-2',
  TEXT_SIZES: {
    HEADING_LARGE: 'text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl',
    HEADING_MEDIUM: 'text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl',
    HEADING_SMALL: 'text-xl md:text-2xl font-bold',
    BODY_LARGE: 'text-base md:text-xl',
    BODY_MEDIUM: 'text-sm md:text-base',
    BODY_SMALL: 'text-xs md:text-sm',
  },
  SPACING: {
    SECTION_Y: 'space-y-6 md:space-y-8',
    CONTENT_Y: 'space-y-3 md:space-y-4',
    BUTTONS: 'gap-4 sm:gap-6',
    GRID: 'gap-4 sm:gap-6',
  },
  FLEX: {
    CENTER: 'flex flex-col items-center text-center',
    WRAP_CENTER: 'flex gap-4 sm:gap-6 flex-wrap justify-center',
  },
} as const

// Animation classes
export const ANIMATION_CLASSES = {
  HOVER_LIFT: 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-700/30',
  BUTTON_HOVER: 'transition-colors hover:text-foreground/80',
  THEME_TRANSITION: 'transition-all',
} as const 