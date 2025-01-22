import { ResourceData, TagData } from '@/types'
import {
  Box,
  Button,
  Modal,
  Stack,
  Text,
  Title,
  Group,
  Badge,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useMemo } from 'react'
import styles from '@kissena/pages/resources/Resource.module.css'
import { ResourceModal } from './Resource.modal'

export function ResourceCard({
  title,
  description,
  link,
  tags,
  id,
}: ResourceData) {
  const [opened, { open, close }] = useDisclosure(false)

  const height = '15rem'
  const width = '25rem'
  const maxTagsRendered = 3

  const renderedTags = useMemo(() => {
    let counter = 0
    const result: JSX.Element[] = []
    tags.forEach((tag: TagData) => {
      counter += 1
      if (counter > maxTagsRendered) {
        return <></>
      }
      result.push(
        <Badge
          variant="filled"
          autoContrast
          radius="sm"
          color={tag.color ?? 'gray.9'}
          key={tag.id}
        >
          {tag.title}
        </Badge>,
      )
    })
    return result
  }, [tags])

  return (
    <Stack flex={1} bd={"1px solid var(--mantine-color-darkGreen-5)"} h={height} miw={width} p={'2rem'} bg={'lightYellow.0'} gap={8}>
      <Box component="div" h={'auto'} mah={'4.8rem'}>
        <Title order={4}>{title}</Title>
      </Box>
      <Group wrap="nowrap" gap={'xs'} pr="xs">
        {renderedTags}
        {tags.size > maxTagsRendered ?
          <Badge opacity={'0.3'} radius={4} color="gray.9">
            ...
          </Badge>
        : <></>}
        {tags.size === 0 ?
          <Badge autoContrast radius={4} color="neonGreen.2">
            Uncategorized
          </Badge>
        : <></>}
      </Group>
      <Box
        className={styles.resourceBody}
        component="div"
        w={'100%'}
        flex={1}
        style={{ overflow: 'hidden' }}
      >
        <Text size="sm">{description}</Text>
      </Box>
      <Box>
        <Button size="sm" onClick={open} color="darkGreen.4">
          View
        </Button>
      </Box>
      <Modal
        className={styles.resourceModal}
        classNames={{
          content: styles.resourceModal,
          header: styles.resourceModal,
        }}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
        size={'md'}
        opened={opened}
        onClose={close}
        title={
          <Text fw={700} c={'neonGreen.9'}>
            Resource Details
          </Text>
        }
      >
        <ResourceModal
          id={id}
          title={title}
          tags={tags}
          description={description}
          link={link}
        />
      </Modal>
    </Stack>
  )
}
