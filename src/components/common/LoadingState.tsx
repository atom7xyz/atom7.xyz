import { Skeleton } from '../ui/skeleton'
import { Alert, AlertDescription } from '../ui/alert'
import { AlertCircle } from 'lucide-react'

interface LoadingStateProps {
  loading: boolean
  error: string | null
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function LoadingState({ loading, error, children, fallback }: LoadingStateProps) {
  if (loading) {
    return fallback || <DefaultLoadingSkeleton />
  }

  if (error) {
    return (
      <Alert variant="destructive" className="my-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load data: {error}
        </AlertDescription>
      </Alert>
    )
  }

  return <>{children}</>
}

function DefaultLoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
    </div>
  )
} 