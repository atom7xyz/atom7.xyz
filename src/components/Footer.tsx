import { usePersonalInfo } from '../hooks/useData'
import { SocialButton } from './common/SocialButton'

export function Footer() {
  const { data: personalInfo } = usePersonalInfo()

  return (
    <footer className="border-t bg-background">
      <div className="container py-4 mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {personalInfo && (
              <SocialButton 
                type="github" 
                url={personalInfo.socialLinks.github} 
                className="text-xs text-muted-foreground hover:text-foreground rounded-full" 
                iconClassName="mr-1 h-3 w-3"
              />
            )}
          </div>
          
          <div className="text-xs text-muted-foreground">
            {personalInfo && (
              <span>Last update: {personalInfo.lastUpdate}</span>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
} 