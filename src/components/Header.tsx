import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useNavigationData } from '../hooks/useData'
import { LoadingState } from './common/LoadingState'
import { Skeleton } from './ui/skeleton'

export function Header() {
  const { theme, setTheme } = useTheme()
  const { data: navigationData, loading, error } = useNavigationData()
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const HeaderLoadingSkeleton = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 select-none">
      <div className="container flex h-14 items-center justify-center mx-auto px-4">
        <div className="flex items-center space-x-3 sm:space-x-6">
          <nav className="flex items-center space-x-3 sm:space-x-6 text-sm font-medium">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-8 w-16" />
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
          >
            <Sun className="h-3 w-3 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-3 w-3 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )

  return (
    <LoadingState 
      loading={loading} 
      error={error} 
      fallback={<HeaderLoadingSkeleton />}
    >
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 select-none">
        <div className="container flex h-14 items-center justify-center mx-auto px-4">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <nav className="flex items-center space-x-3 sm:space-x-6 text-sm font-medium">
              {navigationData?.menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-foreground/60 transition-colors hover:text-foreground/80 text-xs sm:text-sm px-2 sm:px-4"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
            >
              <Sun className="h-3 w-3 sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-3 w-3 sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
    </LoadingState>
  )
} 