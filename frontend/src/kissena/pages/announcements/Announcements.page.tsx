import { PaginationProvider } from '@/kissena/components/Pagination';
import { PageContainer } from '@/kissena/components/PageContainer/PageContainer.tsx'
import { Title, Stack, Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAnnouncementCount } from '@api/announcements';
import { ErrorBlurb } from '@/kissena/components/ErrorBlurb/ErrorBlurb';
import { AnnouncementList } from '@kissena/pages/announcements/AnnouncementList';
import styles from '@kissena/pages/announcements/Announcement.module.css'
import { AddAnnouncementPane } from '@kissena/pages/announcements/AddAnnouncementPane';

// Component for the page content
export function AnnouncementsPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const { data:totalAnnouncements, isError } = useQuery({
    queryKey: ["announcementsCount"],
    queryFn: getAnnouncementCount as () => Promise<number>
  })

  const content = useMemo(() => {
    if (isError) { 
      return <ErrorBlurb />
    }

    return (
      <PaginationProvider maxEntries={totalAnnouncements ?? 0}>
          <AnnouncementList />
      </PaginationProvider>
      )
    }, [totalAnnouncements, isError])

  const adminContent = (
    <>
      <Modal size={'lg'} classNames={{ 'header': styles.mantineModalHeader }} className={styles.mantineModalHeader} opened={opened} onClose={close} title="Create Announcement" centered>
        <AddAnnouncementPane />
      </Modal>
      <Button variant='outline' onClick={open} autoContrast>Create Announcement</Button>
    </>
  )
  
  return (
      <PageContainer>
        <Stack>
        <Title order={2} c='neonGreen.9'>Announcements</Title>
        { adminContent }
        { content }
        </Stack>
      </PageContainer>
  )
}