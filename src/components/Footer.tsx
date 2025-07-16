import { Separator } from './ui/separator'
import { usePersonalInfo } from '../hooks/useData'
import { LoadingState } from './common/LoadingState'
import { SocialButton } from './common/SocialButton'
import { Skeleton } from './ui/skeleton'
import { RESPONSIVE_CLASSES } from '../utils/constants'

export function Footer() {
  const { data: personalInfo, loading, error } = usePersonalInfo()

  const FooterLoadingSkeleton = () => (
    <footer id="contact" className="border-t bg-background select-none">
      <div className="container py-8 md:py-12 mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:space-y-8 max-w-2xl mx-auto">
          <div className="text-center space-y-3 md:space-y-4">
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-10 w-full sm:w-28" />
            ))}
          </div>
          <Skeleton className="h-px w-full max-w-md" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </footer>
  )

  return (
    <LoadingState 
      loading={loading} 
      error={error} 
      fallback={<FooterLoadingSkeleton />}
    >
      {personalInfo && (
        <footer id="contact" className="border-t bg-background select-none">
          <div className="container py-8 md:py-12 mx-auto px-4">
            <div className={`flex flex-col items-center ${RESPONSIVE_CLASSES.SPACING.SECTION_Y} max-w-2xl mx-auto`}>
              <div className={`text-center ${RESPONSIVE_CLASSES.SPACING.CONTENT_Y}`}>
                <h3 className={RESPONSIVE_CLASSES.TEXT_SIZES.HEADING_SMALL}>Contact me</h3>
                <p className={`text-muted-foreground max-w-md ${RESPONSIVE_CLASSES.TEXT_SIZES.BODY_MEDIUM} px-4`}>
                  {personalInfo.contactDescription}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <SocialButton 
                  type="github" 
                  url={personalInfo.socialLinks.github} 
                  className="w-full sm:w-auto text-sm" 
                  iconClassName="mr-2 h-4 w-4"
                />
                <SocialButton 
                  type="linkedin" 
                  url={personalInfo.socialLinks.linkedin} 
                  className="w-full sm:w-auto text-sm" 
                  iconClassName="mr-2 h-4 w-4"
                />
                <SocialButton 
                  type="email" 
                  url={personalInfo.email} 
                  className="w-full sm:w-auto text-sm" 
                  iconClassName="mr-2 h-4 w-4"
                />
              </div>
              
              <Separator className="w-full max-w-md" />
              
              <div className={`text-center ${RESPONSIVE_CLASSES.TEXT_SIZES.BODY_SMALL} text-muted-foreground`}>
                <p>Last update: {personalInfo.lastUpdate}</p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </LoadingState>
  )
} 