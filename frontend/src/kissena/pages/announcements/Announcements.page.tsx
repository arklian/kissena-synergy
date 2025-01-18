import { Announcement } from '@/kissena/components/Announcement/Announcement'
import { PaginationProvider, PaginationControl, PaginationContext } from '@/kissena/components/Pagination';
import { PageContainer } from '@/kissena/components/PageContainer/PageContainer.tsx'
import { Title, Stack, Portal, Affix, Loader } from '@mantine/core'
import { useContext, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAnnouncementCount } from '@api/announcements';
import { AnnouncementData } from '@/types';

// Component for the list of announcements & the pagination control
export function AnnouncementsList() {
  const { activePage, ENTRIES_PER_PAGE } = useContext(PaginationContext);

  // Fetches the data necessary for the currently active page
  const getPageEntries = () => {
      return []
      
      // sampleAnnouncements.slice(
      //   ((activePage - 1 ) * ENTRIES_PER_PAGE),
      //   activePage * ENTRIES_PER_PAGE
      // )
  }

  // Maps the raw announcement data into JSX elements when the page changes
  const renderedAnnouncements = useMemo(
    () => {
      return getPageEntries().map((item, index) => {
        return <></>
        // return <Announcement key={index} title={item.title} description={item.description} datePosted={item.datePosted} redirectUrl={item.redirectUrl} />
      });
  }, [activePage])
  
  return (
  <Stack>
      {renderedAnnouncements}
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

  console.log(totalAnnouncements);

  const content = useMemo(() => {
    if (isLoading) { return <Loader />}
    if (isError || totalAnnouncements === undefined) { 
      return <>An error occurred.</>
    }

    return (
    <PaginationProvider maxEntries={totalAnnouncements}>
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