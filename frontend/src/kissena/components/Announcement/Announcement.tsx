import styles from '@kissena/components/Announcement/Announcement.module.css'
import { Box, Button, Stack, Text } from '@mantine/core'
import { useMemo } from 'react'
import { AnnouncementData } from '@/types'
import { ExternalLink } from 'lucide-react'

export function Announcement({
  title,
  datePosted,
  description,
  redirectUrl,
  id,
}: AnnouncementData) {
  // Format date to MM/DD/YYYY
  const stringifiedDate = useMemo(() => {
    return datePosted.toLocaleDateString('en-US')
  }, [datePosted])

  return (
    <Stack
      gap={0}
      pt={'lg'}
      pb={'xl'}
      className={styles.announcementContainer}
      data-announcement-id={id}
    >
      <Text size="md" c="neonGreen.6" fw={700} lh={'1.2rem'} lineClamp={2}>
        {title}
      </Text>
      <Text size="md" c="neonGreen.9">
        {stringifiedDate}
      </Text>

      <Box
        hidden={!description}
        mt={'xs'}
        className={styles.descriptionContainer}
      >
        <Text size="md" c="lightYellow.1">
          {description}
        </Text>
      </Box>

      <Box mt={'lg'} hidden={!redirectUrl}>
        {/* Use anchor tag to allow for right click + open in new tab, etc. options for users */}
        <a href={redirectUrl}>
          <Button
            c={'lightYellow.1'}
            size="sm"
            color="darkGreen.4"
            rightSection={<ExternalLink size={'1rem'} />}
          >
            Learn More
          </Button>
        </a>
      </Box>
    </Stack>
  )
}
