import { TagData } from '@/types'
import { Checkbox, Stack, Group, Text, Button, Space, Box } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import styles from '@kissena/pages/resources/Resource.module.css'

export const uncategorizedId = '__uncategorized__';

interface FilterListProps {
  tags: TagData[]
  selectedTagIds: Set<string>
  setSelectedTagIds: Dispatch<SetStateAction<Set<string>>>
}

interface FilterLabelProps {
  tagTitle:string, 
  active:boolean,
  toggle:() => void,
}

function FilterLabel({tagTitle, active, toggle}:FilterLabelProps) {
  return <Group>
      <Button classNames={{ label: styles.wrapButton}}
       h={"auto"} variant='light' p={"4"} onClick={toggle} justify='flex-start' color='darkGreen.4' w={"100%"}>
        <Checkbox
        color='darkGreen.4'
        checked={active}
        />
        <Space w="xs" />
        <Box w={"100%"} h={'auto'}>
        <Text size='sm' >{tagTitle}</Text>
        </Box>
      </Button>
      </Group>
}

export function FilterList({ tags, selectedTagIds, setSelectedTagIds }: FilterListProps) {
  const toggleId = (id:string) => {
        console.log(id)
        const updated = new Set(selectedTagIds);
        if (selectedTagIds.has(id)) {
          updated.delete(id)
        } else {
          updated.add(id)
        }
        setSelectedTagIds(updated)
  }

  const content = tags.map((tag:TagData) => {
    return <FilterLabel key={tag.id} tagTitle={tag.title} active={selectedTagIds.has(tag.id)} toggle={() => toggleId(tag.id)} />
  })

  return <Stack gap={7}>
    <Button disabled={selectedTagIds.size === 0} onClick={() => setSelectedTagIds(new Set([]))} w={"100%"} color='darkGreen.4'>Reset Filters</Button>
    <FilterLabel tagTitle='Uncategorized' active={selectedTagIds.has(uncategorizedId)} toggle={() => toggleId(uncategorizedId)} />
    {content}
  </Stack>
}
