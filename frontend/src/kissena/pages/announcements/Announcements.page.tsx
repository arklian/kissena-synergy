import { Announcement } from '@/kissena/components/Announcement/Announcement'
import { PaginationProvider, PaginationControl, PaginationContext } from '@/kissena/components/Pagination';
import { PageContainer } from '@/kissena/components/PageContainer/PageContainer.tsx'
import { Title, Stack, Portal, Affix, Skeleton } from '@mantine/core'
import { useContext, useEffect, useMemo } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAnnouncementCount, getAnnouncements } from '@api/announcements';
import { AnnouncementData } from '@/types';
import { ErrorBlurb } from '@/kissena/components/ErrorBlurb/ErrorBlurb';

function PlaceholderAnnouncements({hidden}: {hidden:boolean}) {
  return (
    <Stack>
      {Array.from(Array(5)).map((elem, index) => {
        return <Skeleton hidden={hidden} key={index} h={200} opacity={0.1} />
      })} 
    </Stack>
  )
}

// Component for the list of announcements & the pagination control
export function AnnouncementsList() {
  const queryClient = useQueryClient();
  const { activePage, ENTRIES_PER_PAGE } = useContext(PaginationContext);

  // Fetch list of announcements
  const { data, isLoading, isError, refetch } = useQuery<AnnouncementData[]>({
    queryKey: ["announcements"],
    queryFn: () => {
      // NOTE: Unsure why TS is giving me a linter error, leaving for now to test.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call 
      return getAnnouncements((activePage - 1) * ENTRIES_PER_PAGE, ENTRIES_PER_PAGE) as Promise<AnnouncementData[]>
    }
  });

  // Render list of announcements, if possible
  const content = useMemo(() => {
    if (isLoading) { 
      return <PlaceholderAnnouncements hidden={!isLoading} />
    }
    if (isError) { 
      return <ErrorBlurb />
    }
    return (data ?? []).map((item) => {
      return <Announcement key={item.id} title={item.title} description={item.description} datePosted={item.datePosted} redirectUrl={item.redirectUrl} id={item.id} />
    })
  }, [data, isLoading, isError])

  // Refetch new announcements when page changes
  useEffect(() => {
    refetch()
      .catch(err => console.error(err))
  }, [activePage, queryClient, refetch])
  
  return (
  <Stack>
      {content}
      <Portal>
        <Affix position={{ bottom: 20, right: 20 }}>
          <PaginationControl />
        </Affix>
      </Portal>
  </Stack>
  )
}

// Component for the page content
export function AnnouncementsPage() {
  const { data:totalAnnouncements, isLoading, isError } = useQuery({
    queryKey: ["announcementsCount"],
    queryFn: getAnnouncementCount as () => Promise<number>
  })

  const content = useMemo(() => {
    if (isError) { 
      return <ErrorBlurb />
    }

  return (
    <PaginationProvider maxEntries={totalAnnouncements ?? 0}>
        <PlaceholderAnnouncements hidden={!isLoading} />
        <AnnouncementsList />
    </PaginationProvider>
    )
  }, [totalAnnouncements, isLoading, isError])
  
  return (
      <PageContainer>
        <Stack>
        <Title order={2} c='neonGreen.9'>Announcements</Title>
        { content }
        </Stack>
      </PageContainer>
  )
}