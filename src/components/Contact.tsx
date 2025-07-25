import { usePersonalInfo } from '../hooks/useData'
import { LoadingState } from './common/LoadingState'
import { SectionLayout } from './common/SectionLayout'
import { SocialButton } from './common/SocialButton'
import { Skeleton } from './ui/skeleton'
import { RESPONSIVE_CLASSES } from '../utils/constants'

export function Contact() {
  const { data: personalInfo, loading, error } = usePersonalInfo()

  const ContactLoadingSkeleton = () => (
    <SectionLayout id="contact">
      <div className={RESPONSIVE_CLASSES.SPACING.CONTENT_Y}>
        <Skeleton className="h-10 w-48 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-10 w-32" />
          ))}
        </div>
      </div>
    </SectionLayout>
  )

  return (
    <LoadingState 
      loading={loading} 
      error={error} 
      fallback={<ContactLoadingSkeleton />}
    >
      {personalInfo && (
        <SectionLayout id="contact">
          <div className={RESPONSIVE_CLASSES.SPACING.CONTENT_Y}>
            <h2 className={RESPONSIVE_CLASSES.TEXT_SIZES.HEADING_MEDIUM}>
              Contact me
            </h2>
            <p className={`mx-auto max-w-[700px] text-muted-foreground ${RESPONSIVE_CLASSES.TEXT_SIZES.BODY_LARGE} px-4`}>
              {personalInfo.contactDescription}
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <SocialButton 
                type="github" 
                url={personalInfo.socialLinks.github} 
                className="w-full sm:w-auto" 
                iconClassName="mr-2 h-4 w-4"
              />
              <SocialButton 
                type="linkedin" 
                url={personalInfo.socialLinks.linkedin} 
                className="w-full sm:w-auto" 
                iconClassName="mr-2 h-4 w-4"
              />
              <SocialButton 
                type="email" 
                url={personalInfo.email} 
                className="w-full sm:w-auto" 
                iconClassName="mr-2 h-4 w-4"
              />
            </div>
          </div>
        </SectionLayout>
      )}
    </LoadingState>
  )
} 