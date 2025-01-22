import { TagData } from '@/types'
import { Checkbox, Stack, Group, Text } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

interface FilterListProps {
  tags: TagData[]
  selectedTagIds: Set<string>
  setSelectedTagIds: Dispatch<SetStateAction<Set<string>>>
}

export function FilterList({ tags, selectedTagIds, setSelectedTagIds }: FilterListProps) {
  const content = tags.map((tag:TagData) => {
    const active = selectedTagIds.has(tag.id) 
    return <Group key={tag.id}>
        <Checkbox
        color='darkGreen.4'
        checked={active}
        onChange={() => {
          console.log(tag.id)
          const updated = new Set(selectedTagIds);
          if (selectedTagIds.has(tag.id)) {
            updated.delete(tag.id)
          } else {
            updated.add(tag.id)
          }
          setSelectedTagIds(updated)
        }}
        label={<Text size='sm'>{tag.title}</Text>}
        />
        
      </Group>
  })

  return <Stack bg={"white"}>
    {content}
  </Stack>
}
