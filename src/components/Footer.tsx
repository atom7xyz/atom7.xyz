import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-background select-none">
      <div className="container py-8 md:py-12 mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:space-y-8 max-w-2xl mx-auto">
          <div className="text-center space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Contact me</h3>
            <p className="text-muted-foreground max-w-md text-sm md:text-base px-4">
              Open to discussing new projects, technical challenges, or potential collaborations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button variant="outline" asChild className="w-full sm:w-auto text-sm">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto text-sm">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto text-sm">
              <a href="mailto:anton@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
          </div>
          
          <Separator className="w-full max-w-md" />
          
          <div className="text-center text-xs md:text-sm text-muted-foreground">
            <p>Last update: 26/05/2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 