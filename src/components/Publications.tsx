import { PublicationCard } from './PublicationCard'
import { usePublicationsData } from '../hooks/useData'
import { LoadingState } from './common/LoadingState'
import { SectionLayout } from './common/SectionLayout'
import { Skeleton } from './ui/skeleton'
import { SKELETON_COUNTS, RESPONSIVE_CLASSES } from '../utils/constants'

export function Publications() {
  const { data: publicationsData, loading, error } = usePublicationsData()

  const PublicationsLoadingSkeleton = () => (
    <SectionLayout id="publications" spacing="hero" maxWidth="wide">
      <div className="text-center mb-12 md:mb-16">
        <Skeleton className="h-10 w-56 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        {Array.from({ length: SKELETON_COUNTS.PUBLICATION_CARDS }).map((_, i) => (
          <Skeleton key={i} className="h-48" />
        ))}
      </div>
    </SectionLayout>
  )

  return (
    <LoadingState 
      loading={loading} 
      error={error} 
      fallback={<PublicationsLoadingSkeleton />}
    >
      {publicationsData && (
        <SectionLayout id="publications" spacing="hero" maxWidth="wide">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`${RESPONSIVE_CLASSES.TEXT_SIZES.HEADING_MEDIUM} mb-4`}>
              {publicationsData.sectionTitle}
            </h2>
            <p className={`mx-auto max-w-[700px] text-muted-foreground ${RESPONSIVE_CLASSES.TEXT_SIZES.BODY_LARGE}`}>
              {publicationsData.sectionDescription}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8">
            {publicationsData.publications.map((publication, index) => (
              <PublicationCard key={index} {...publication} />
            ))}
          </div>
          
          {publicationsData.publications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{publicationsData.emptyStateMessage}</p>
            </div>
          )}
        </SectionLayout>
      )}
    </LoadingState>
  )
} 