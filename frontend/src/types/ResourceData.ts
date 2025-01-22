import { TagData } from './TagData'

interface ResourceData {
  id:string,
  title: string
  description?: string
  tags: TagData[]
  link: string
}

export type { ResourceData }
