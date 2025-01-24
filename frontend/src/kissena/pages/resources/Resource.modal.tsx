import { ResourceData, TagData } from '@/types'
import { Stack, Title, Group, Badge, Space, Button, Text } from '@mantine/core'
import { useMemo } from 'react'
import { ExternalLink } from 'lucide-react'

export function ResourceModal({
  title,
  description,
  tags,
  link,
  id,
}: ResourceData) {
  const renderedTags = useMemo(() => {
    return tags.map((tag: TagData) => {
      return (
        <Badge
          variant="filled"
          autoContrast
          radius="sm"
          color={tag.color ?? 'gray.9'}
          key={tag.id}
        >
          {tag.title}
        </Badge>
      )
    })
  }, [tags])

  return (
    <Stack gap={10} data-resource-id={id}>
      <Group gap={'xs'}>
        {renderedTags}
        {tags.size === 0 ?
          <Badge autoContrast radius={4} color="neonGreen.2">
            Uncategorized
          </Badge>
        : <></>}
      </Group>
      <Title order={3} c={'darkGreen.6'}>
        {title}
      </Title>
      <Text size="">{description}</Text>
      <Space h="lg" />
      <Button
        rightSection={<ExternalLink size={16} />}
        component="a"
        size="sm"
        href={link ?? ''}
        color="darkGreen.4"
      >
        Visit Link
      </Button>
    </Stack>
  )
}
