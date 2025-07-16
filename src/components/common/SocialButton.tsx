import { Button } from '../ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

interface SocialButtonProps {
  type: 'github' | 'linkedin' | 'email'
  url: string
  variant?: 'outline' | 'ghost'
  size?: 'default' | 'lg'
  className?: string
  showIcon?: boolean
  iconClassName?: string
}

const socialConfig = {
  github: {
    icon: Github,
    label: 'GitHub',
  },
  linkedin: {
    icon: Linkedin,
    label: 'LinkedIn',
  },
  email: {
    icon: Mail,
    label: 'Email Me',
  },
} as const

export function SocialButton({ 
  type, 
  url, 
  variant = 'outline', 
  size = 'default',
  className = '',
  showIcon = true,
  iconClassName = ''
}: SocialButtonProps) {
  const config = socialConfig[type]
  const Icon = config.icon
  
  const href = type === 'email' ? `mailto:${url}` : url
  const target = type === 'email' ? undefined : '_blank'
  const rel = type === 'email' ? undefined : 'noopener noreferrer'
  
  return (
    <Button variant={variant} size={size} asChild className={className}>
      <a href={href} target={target} rel={rel}>
        {showIcon && <Icon className={iconClassName} />}
        {config.label}
      </a>
    </Button>
  )
} 