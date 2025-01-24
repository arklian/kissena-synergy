import { ResourceData } from '@/types'
import { useMemo } from 'react'
import { Group, Title } from '@mantine/core'
import { ResourceCard } from './Resource.card'

interface ResourceListProps {
  resources: ResourceData[]
  selectedTagIds: Set<string>
}

export function ResourceList({ resources, selectedTagIds }: ResourceListProps) {
  const filtered = useMemo(() => {
    return resources.filter((resource: ResourceData) => {
      if (selectedTagIds.size === 0) {
        return true
      }
      for (const tag of resource.tags) {
        if (selectedTagIds.has(tag.id)) {
          return true
        }
      }
      return false
    })
  }, [resources, selectedTagIds])

  console.log(filtered)

  return (
    <Group>
      {filtered.map((resource: ResourceData) => (
        <ResourceCard {...resource} key={resource.id} />
      ))}
      <Title c={"neonGreen.9"} order={3} hidden={filtered.length !== 0}>No resources found.</Title>
    </Group>
  )
}
