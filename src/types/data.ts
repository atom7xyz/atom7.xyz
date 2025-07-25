export interface PersonalInfo {
  name: string
  title: string
  description: string
  contactDescription: string
  email: string
  socialLinks: {
    github: string
    linkedin: string
  }
  technologies: string[]
  lastUpdate: string
}

export interface NavigationItem {
  id: string
  label: string
  sectionId: string
}

export interface NavigationData {
  menuItems: NavigationItem[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  projectUrl: string
  imageUrl?: string
}

export interface ProjectsData {
  sectionTitle: string
  sectionDescription: string
  projects: Project[]
}

export interface Publication {
  title: string
  abstract: string
  technologies: string[]
  publicationDate: string
  type: 'whitepaper' | 'article' | 'research' | 'technical-report' | 'technical-paper'
  downloadUrl?: string
  previewUrl?: string
}

export interface PublicationsData {
  sectionTitle: string
  sectionDescription: string
  emptyStateMessage: string
  publications: Publication[]
}

export interface Book {
  title: string
  authors: string[]
  coverUrl: string
}

export interface BooksData {
  sectionTitle: string
  sectionDescription: string
  books: Book[]
} 