import { PageContainer } from '@/kissena/components/PageContainer/PageContainer'
import {
  FilterList,
  uncategorizedId,
} from '@kissena/pages/resources/Tag.filter.list'
import { ResourceList } from '@kissena/pages/resources/Resource.list'
import { useMemo, useState } from 'react'
import {
  Box,
  Button,
  Drawer,
  Grid,
  Group,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { TagData, UnlinkedResource } from '@/types'
import { useDisclosure } from '@mantine/hooks'
import styles from '@kissena/pages/resources/Resource.module.css'
import { Filter } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getResources } from '@/api/resources'
import { getTags } from '@/api/tags'
import { PlaceholderStack } from '@/kissena/components/PlaceholderStack/PlaceholderStack'

export function ResourcePage() {
  const [opened, { open, close }] = useDisclosure(false)
  const [selectedTagIds, setSelectedTagIds] = useState<Set<string>>(new Set())
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
    if (resourcesLoading || resourcesError) {
      return []
    }
    if (tagsLoading || tagsError) {
      return []
    }
    if (!untaggedResources || !tags) {
      return []
    }

    const uncategorizedTag: TagData = {
      id: uncategorizedId,
      title: 'Uncategorized',
    }
    const unknownTag: TagData = {
      id: crypto.randomUUID(),
      title: 'Unknown',
    }
    const idToTag = new Map<string, TagData>()

    tags.forEach((tag: TagData) => {
      idToTag.set(tag.id, { ...tag })
    })

    return untaggedResources.map((resource) => {
      const linkedTags: TagData[] = resource.tagIds.map((id: string) =>
        idToTag.has(id) ? idToTag.get(id)! : unknownTag,
      )
      if (linkedTags.length === 0) {
        linkedTags.push(uncategorizedTag)
      }
      return {
        ...resource,
        tags: new Set(linkedTags),
      }
    })
  }, [
    tags,
    tagsLoading,
    tagsError,
    untaggedResources,
    resourcesLoading,
    resourcesError,
  ])

  const content = useMemo(() => {
    if (resourcesLoading || tagsLoading) {
      return (
        <Grid.Col span={12}>
          <PlaceholderStack entries={3} hidden={false} opacity={0.5} />
        </Grid.Col>
      )
    }
    if (resourcesError || tagsError) {
      return (
        <Grid.Col span={12}>
          <Stack>
            <Space h={'xl'} />
            <Title c="neonGreen.8">Uh Oh!</Title>
            <Title order={2}>An error Occured</Title>
          </Stack>
        </Grid.Col>
      )
    }
    return (
      <>
        <Grid.Col span={2} visibleFrom="md" />
        <Grid.Col span={{ base: 12, md: 10 }}>
          <ResourceList resources={resources} selectedTagIds={selectedTagIds} />
        </Grid.Col>
        <Grid.Col span={2} visibleFrom="md">
          <FilterList
            tags={tags ?? []}
            selectedTagIds={selectedTagIds}
            setSelectedTagIds={setSelectedTagIds}
          />
        </Grid.Col>
        <Drawer
          className={styles.drawer}
          classNames={{ header: styles.drawer, content: styles.drawer }}
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          position="right"
          title={<Text>Edit Tags</Text>}
          opened={opened}
          onClose={close}
        >
          <FilterList
            tags={tags ?? []}
            selectedTagIds={selectedTagIds}
            setSelectedTagIds={setSelectedTagIds}
          />
        </Drawer>
      </>
    )
  }, [
    tags,
    tagsLoading,
    tagsError,
    resources,
    resourcesLoading,
    resourcesError,
    selectedTagIds,
    setSelectedTagIds,
    opened,
    close,
  ])

  return (
    <div id={styles.resourcePage}>
      {/* Workaround for changing the body color ONLY on this page. */}
      <style>
        {`body{background-color: var(--mantine-color-lightYellow-0);}`}
      </style>
      <PageContainer wide>
        <Grid>
          <Grid.Col span={{ base: 12, md: 10 }}>
            <Group justify="space-between">
              <Title c="darkGreen.5" order={2}>
                Resources
              </Title>
              <Box hidden={(tags ?? []).length === 0}>
                <Button
                  size="md"
                  leftSection={<Filter size={15} />}
                  onClick={open}
                  hiddenFrom="md"
                  color={'darkGreen.4'}
                >
                  Filters
                </Button>
              </Box>
            </Group>
          </Grid.Col>
          {content}
          <Grid.Col span={2} visibleFrom="md" />
        </Grid>
      </PageContainer>
    </div>
  )
}
