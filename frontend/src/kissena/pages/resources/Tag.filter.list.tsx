import { TagData } from '@/types'
import { Checkbox, Stack, Group, Text, Divider, Button, Space, Box } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import styles from '@kissena/pages/resources/Resource.module.css'

interface FilterListProps {
  tags: TagData[]
  selectedTagIds: Set<string>
  setSelectedTagIds: Dispatch<SetStateAction<Set<string>>>
}

export function FilterList({ tags, selectedTagIds, setSelectedTagIds }: FilterListProps) {
  const content = tags.map((tag:TagData) => {
    const toggle = () => {
          console.log(tag.id)
          const updated = new Set(selectedTagIds);
          if (selectedTagIds.has(tag.id)) {
            updated.delete(tag.id)
          } else {
            updated.add(tag.id)
          }
          setSelectedTagIds(updated)
    }
    const active = selectedTagIds.has(tag.id) 
    return  <>
    <Group key={tag.id}>
      <Button classNames={{ label: styles.wrapButton}}
       h={"auto"} variant='light' p={"4"} onClick={toggle} justify='flex-start' color='darkGreen.4' w={"100%"}>
        <Checkbox
        color='darkGreen.4'
        checked={active}
        />
        <Space w="xs" />
        <Box w={"100%"} h={'auto'}>
        <Text size='sm' >{tag.title}</Text>
        </Box>
      </Button>
      </Group>
    </>
  })

  return <Stack gap={7}>
    <Button disabled={selectedTagIds.size === 0} onClick={() => setSelectedTagIds(new Set([]))} w={"100%"} color='darkGreen.4'>Reset Filters</Button>
    {content}
  </Stack>
}
