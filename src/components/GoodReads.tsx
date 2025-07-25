import { BookCard } from './BookCard'
import { useBooksData } from '../hooks/useData'
import { LoadingState } from './common/LoadingState'
import { SectionLayout } from './common/SectionLayout'
import { Skeleton } from './ui/skeleton'
import { RESPONSIVE_CLASSES } from '../utils/constants'

export function GoodReads() {
  const { data: booksData, loading, error } = useBooksData()

  const BooksLoadingSkeleton = () => (
    <SectionLayout id="good-reads">
      <div className={RESPONSIVE_CLASSES.SPACING.CONTENT_Y}>
        <Skeleton className="h-10 w-48 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className={`grid ${RESPONSIVE_CLASSES.SPACING.GRID} ${RESPONSIVE_CLASSES.GRID_COLS_4} w-full`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[3/4]" />
        ))}
      </div>
    </SectionLayout>
  )

  return (
    <LoadingState 
      loading={loading} 
      error={error} 
      fallback={<BooksLoadingSkeleton />}
    >
      {booksData && (
        <SectionLayout id="good-reads">
          <div className={RESPONSIVE_CLASSES.SPACING.CONTENT_Y}>
            <h2 className={RESPONSIVE_CLASSES.TEXT_SIZES.HEADING_MEDIUM}>
              {booksData.sectionTitle}
            </h2>
            <p className={`mx-auto max-w-[700px] text-muted-foreground ${RESPONSIVE_CLASSES.TEXT_SIZES.BODY_LARGE} px-4`}>
              {booksData.sectionDescription}
            </p>
          </div>
          
          <div className={`grid ${RESPONSIVE_CLASSES.SPACING.GRID} ${RESPONSIVE_CLASSES.GRID_COLS_4} w-full`}>
            {booksData.books.map((book) => (
              <BookCard
                key={`${book.title}-${book.authors[0]}`}
                title={book.title}
                authors={book.authors}
                coverUrl={book.coverUrl}
              />
            ))}
          </div>
        </SectionLayout>
      )}
    </LoadingState>
  )
} 