import { TagData } from './TagData'

interface ResourceData {
  title: string
  description?: string
  tags: TagData[]
  link: string
}

export type { ResourceData }
