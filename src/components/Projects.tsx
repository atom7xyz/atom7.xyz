import { ProjectCard } from './ProjectCard'
import { useProjectsData } from '../hooks/useData'
import { LoadingState } from './common/LoadingState'
import { SectionLayout } from './common/SectionLayout'
import { Skeleton } from './ui/skeleton'
import { SKELETON_COUNTS, RESPONSIVE_CLASSES } from '../utils/constants'

export function Projects() {
  const { data: projectsData, loading, error } = useProjectsData()

  const ProjectsLoadingSkeleton = () => (
    <SectionLayout id="projects">
      <div className={RESPONSIVE_CLASSES.SPACING.CONTENT_Y}>
        <Skeleton className="h-10 w-48 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className={`grid ${RESPONSIVE_CLASSES.SPACING.GRID} ${RESPONSIVE_CLASSES.GRID_COLS_2} w-full`}>
        {Array.from({ length: SKELETON_COUNTS.PROJECT_CARDS }).map((_, i) => (
          <Skeleton key={i} className="h-60" />
        ))}
      </div>
    </SectionLayout>
  )

  return (
    <LoadingState 
      loading={loading} 
      error={error} 
      fallback={<ProjectsLoadingSkeleton />}
    >
      {projectsData && (
        <SectionLayout id="projects">
          <div className={RESPONSIVE_CLASSES.SPACING.CONTENT_Y}>
            <h2 className={RESPONSIVE_CLASSES.TEXT_SIZES.HEADING_LARGE}>
              {projectsData.sectionTitle}
            </h2>
            <p className={`mx-auto max-w-[700px] text-muted-foreground ${RESPONSIVE_CLASSES.TEXT_SIZES.BODY_LARGE} px-4`}>
              {projectsData.sectionDescription}
            </p>
          </div>
          
          <div className={`grid ${RESPONSIVE_CLASSES.SPACING.GRID} ${RESPONSIVE_CLASSES.GRID_COLS_2} w-full`}>
            {projectsData.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                projectUrl={project.projectUrl}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </SectionLayout>
      )}
    </LoadingState>
  )
}