import { useState, useEffect } from 'react'
import type { PersonalInfo, NavigationData, ProjectsData, PublicationsData } from '../types/data'

function useDataLoader<T>(dataPath: string): { data: T | null; loading: boolean; error: string | null } {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(dataPath)
        if (!response.ok) {
          throw new Error(`Failed to load data from ${dataPath}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
        console.error(`Error loading data from ${dataPath}:`, err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [dataPath])

  return { data, loading, error }
}

export function usePersonalInfo() {
  return useDataLoader<PersonalInfo>('/data/personal.json')
}

export function useNavigationData() {
  return useDataLoader<NavigationData>('/data/navigation.json')
}

export function useProjectsData() {
  return useDataLoader<ProjectsData>('/data/projects.json')
}

export function usePublicationsData() {
  return useDataLoader<PublicationsData>('/data/publications.json')
} 