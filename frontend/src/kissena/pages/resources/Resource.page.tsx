import { PageContainer } from '@/kissena/components/PageContainer/PageContainer'
import { FilterList, uncategorizedId } from '@kissena/pages/resources/Tag.filter.list'
import { ResourceList } from '@kissena/pages/resources/Resource.list'
import { useMemo, useState } from 'react'
import { Button, Drawer, Grid, Group, Text, Title } from '@mantine/core'
import { TagData, ResourceData, UnlinkedResource} from '@/types'
import { useDisclosure } from '@mantine/hooks'
import styles from '@kissena/pages/resources/Resource.module.css'
import { Filter } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getResources } from '@/api/resources'
import { getTags } from '@/api/tags'

export function ResourcePage() {
  const {
      data: untaggedResources,
      isLoading: resourcesLoading,
      isError: resourcesError,
    } = useQuery<UnlinkedResource[]>({
      queryKey: ['resources'],
      queryFn: () => {
        return getResources()
      },
    })

  const {
      data: tags,
      isLoading: tagsLoading,
      isError: tagsError,
    } = useQuery<TagData[]>({
      queryKey: ['tags'],
      queryFn: () => {
        return getTags()
      },
  })

  const resources = useMemo(() => {
    if (resourcesLoading || resourcesError) { return []; }
    if (tagsLoading || tagsError) { return []; }
    if (!untaggedResources || !tags) { return []; }

    const uncategorizedTag:TagData = {
      id: uncategorizedId,
      title: "Uncategorized"
    };
    const unknownTag:TagData = {
      id: crypto.randomUUID(),
      title: "Unknown"
    };
    const idToTag = new Map<string, TagData>();
    
    tags.forEach((tag:TagData) => {
      idToTag.set(tag.id, {...tag})
    })
    
    return untaggedResources.map(resource => {
      const linkedTags:TagData[] = resource.tagIds.map((id:string) => 
        idToTag.has(id)
        ? idToTag.get(id)!
        : unknownTag
      );
      if (linkedTags.length === 0) {
        linkedTags.push(uncategorizedTag)
      }
      return {
        ...resource,
        tags: new Set(linkedTags)
      }
    })
    
  }, [tags, tagsLoading, tagsError, untaggedResources, resourcesLoading, resourcesError])

  const [opened, {open, close}] = useDisclosure(false);
  const [selectedTagIds, setSelectedTagIds] = useState<Set<string>>(new Set());

  return (
    <PageContainer wide>
      <Grid>
      <Grid.Col span={{ base: 12, md: 10 }}>
        <Group justify='space-between'>
          <Title c='darkGreen.5' order={2}>Resources</Title>
          <Button size='md' leftSection={<Filter size={15} />} onClick={open} hiddenFrom='md' color={'darkGreen.4'}>Filters</Button>
        </Group>
      </Grid.Col>
      <Grid.Col span={2} visibleFrom='md' />
      <Grid.Col span={{ base: 12, md: 10 }}>
        <ResourceList resources={resources} selectedTagIds={selectedTagIds} />
      </Grid.Col>
      <Grid.Col span={2} visibleFrom='md'>
          <FilterList
            tags={tags ?? []}
            selectedTagIds={selectedTagIds}
            setSelectedTagIds={setSelectedTagIds}
          />
        </Grid.Col>
      </Grid>
      <Drawer
      className={styles.drawer}
      classNames={{ header: styles.drawer, content: styles.drawer }}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
       position='right' title={<Text>Edit Tags</Text>} opened={opened} onClose={close}>
        <FilterList
            tags={tags ?? []}
            selectedTagIds={selectedTagIds}
            setSelectedTagIds={setSelectedTagIds}
          />
      </Drawer>
    </PageContainer>
  )
}
