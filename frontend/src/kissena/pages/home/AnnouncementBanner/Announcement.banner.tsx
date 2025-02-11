import { AnnouncementData } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { getAnnouncements } from '@/api/announcements'
import {
  Stack,
  Text,
  Group,
  Divider,
  Box,
  Button,
  Space,
  Loader,
} from '@mantine/core'
import { HEROTEXT_OFFSET_X } from '@kissena/pages/home/Home.page'
import styles from '@kissena/pages/home/AnnouncementBanner/Announcement.banner.module.css'
import { useMemo } from 'react'
import { ExternalLink } from 'lucide-react'

export function AnnouncementBanner() {
  // Retrieve latest announcement
  const {
    data: announcement,
    isLoading,
    isError,
  } = useQuery<AnnouncementData>({
    queryKey: ['latestAnnouncement'],
    queryFn: () => {
      return getAnnouncements(0, 1).then((res) => res[0])
    },
  })

  // Format date to MM/DD/YYYY
  const stringifiedDate = useMemo(() => {
    if (!announcement?.datePosted) {
      return ''
    }
    return announcement.datePosted.toLocaleDateString('en-US')
  }, [announcement])

  // Render content based on the state of information fetching
  const content = useMemo(() => {
    console.log(announcement)
    if (isError) {
      return (
        <Text size="md">Whoops! Could not load the latest announcement.</Text>
      )
    }
    if (isLoading) {
      return (
        <Stack align="center">
          <Loader color={'darkGreen.6'} type="dots" />
        </Stack>
      )
    }

    return (
      <>
        <Box visibleFrom="sm" className={styles.bannerContainer}>
          <Text size="md">Latest Announcement</Text>
          <Divider color="black" orientation="vertical" />
          <Group wrap="nowrap">
            <Text size="sm" lh={'1rem'}>
              {stringifiedDate}
            </Text>
            <Text lineClamp={1} size="md" fw={700}>
              {announcement?.title ?? ''}
            </Text>
          </Group>
          <Button
            component="a"
            href="/announcements"
            variant="subtle"
            color="black"
            rightSection={<ExternalLink size={'24'} />}
          >
            View All
          </Button>
        </Box>
        <Stack hiddenFrom="sm" gap={0}>
          <Text size="md">Latest Announcement</Text>
          <Box>
            <Text lineClamp={2} size="md" fw={700}>
              {announcement?.title}
            </Text>
            <Text size="md">{stringifiedDate}</Text>
            <Space h={'sm'} />
            <Button
              component="a"
              href="/announcements"
              variant="outline"
              color="black"
              rightSection={<ExternalLink size={'20'} />}
            >
              View All
            </Button>
          </Box>
        </Stack>
      </>
    )
  }, [announcement, isLoading, isError, stringifiedDate])

  return (
    <Box w={"100%"} p={`0.7rem ${HEROTEXT_OFFSET_X}`} bg={'neonGreen.6'}>
      {content}
    </Box>
  )
}
