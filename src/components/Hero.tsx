import { usePersonalInfo } from '../hooks/useData'
import { LoadingState } from './common/LoadingState'
import { SocialButton } from './common/SocialButton'
import { TechnologyBadge } from './common/TechnologyBadge'
import { SectionLayout } from './common/SectionLayout'
import { Skeleton } from './ui/skeleton'
import { SKELETON_COUNTS, RESPONSIVE_CLASSES } from '../utils/constants'

export function Hero() {
  const { data: personalInfo, loading, error } = usePersonalInfo()

  const HeroLoadingSkeleton = () => (
    <SectionLayout id="about" spacing="hero" maxWidth="narrow">
      <div className={RESPONSIVE_CLASSES.SPACING.CONTENT_Y}>
        <Skeleton className="h-12 w-48 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="flex flex-wrap gap-2 justify-center px-4">
        {Array.from({ length: SKELETON_COUNTS.TECHNOLOGY_BADGES }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-16" />
        ))}
      </div>
      <div className={RESPONSIVE_CLASSES.FLEX.WRAP_CENTER}>
        {Array.from({ length: SKELETON_COUNTS.SOCIAL_BUTTONS }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-28" />
        ))}
      </div>
    </SectionLayout>
  )

  return (
    <LoadingState 
      loading={loading} 
      error={error} 
      fallback={<HeroLoadingSkeleton />}
    >
      {personalInfo && (
        <SectionLayout id="about" spacing="hero" maxWidth="narrow">
          <div className={RESPONSIVE_CLASSES.SPACING.CONTENT_Y}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <p className={`mx-auto max-w-[700px] text-muted-foreground ${RESPONSIVE_CLASSES.TEXT_SIZES.BODY_LARGE} px-4`}>
              {personalInfo.title}
              <br />
              {personalInfo.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center px-4">
            {personalInfo.technologies.map((tech) => (
              <TechnologyBadge key={tech} technology={tech} size="large" />
            ))}
          </div>

          <div className={RESPONSIVE_CLASSES.FLEX.WRAP_CENTER}>
            <SocialButton 
              type="github" 
              url={personalInfo.socialLinks.github} 
              size="lg" 
              className="p-3 w-28" 
            />
            <SocialButton 
              type="linkedin" 
              url={personalInfo.socialLinks.linkedin} 
              size="lg" 
              className="p-3 w-28" 
            />
            <SocialButton 
              type="email" 
              url={personalInfo.email} 
              size="lg" 
              className="p-3 w-28" 
            />
          </div>
        </SectionLayout>
      )}
    </LoadingState>
  )
} 