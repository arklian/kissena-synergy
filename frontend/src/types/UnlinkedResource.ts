import { TagData } from './TagData'

interface UnlinkedResource {
  id:string,
  title: string
  description?: string
  tagIds: string[]
  link: string
}

export type { UnlinkedResource }
