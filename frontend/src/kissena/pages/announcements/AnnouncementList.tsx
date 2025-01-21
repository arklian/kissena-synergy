import { Announcement } from '@/kissena/components/Announcement/Announcement'
import {
  PaginationControl,
  PaginationContext,
} from '@/kissena/components/Pagination'
import { Stack, Portal, Affix } from '@mantine/core'
import { useContext, useEffect, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAnnouncements } from '@api/announcements'
import { AnnouncementData } from '@/types'
import { ErrorBlurb } from '@/kissena/components/ErrorBlurb/ErrorBlurb'
import { PlaceholderStack } from '@/kissena/components/PlaceholderStack/PlaceholderStack'

// Component for the list of announcements & the pagination control
export function AnnouncementList() {
  const { activePage, ENTRIES_PER_PAGE } = useContext(PaginationContext)

  // Fetch list of announcements
  const { data, isLoading, isError, refetch } = useQuery<AnnouncementData[]>({
    queryKey: ['announcements'],
    queryFn: () => {
      return getAnnouncements(
        (activePage - 1) * ENTRIES_PER_PAGE,
        ENTRIES_PER_PAGE,
      )
    },
  })

  // Render list of announcements, if possible
  const content = useMemo(() => {
    if (isLoading) {
      return <PlaceholderStack hidden={!isLoading} />
    }
    if (isError) {
      return <ErrorBlurb />
    }
    return (data ?? []).map((item) => {
      return (
        <Announcement
          key={item.id}
          title={item.title}
          description={item.description}
          datePosted={item.datePosted}
          redirectUrl={item.redirectUrl}
          id={item.id}
        />
      )
    })
  }, [data, isLoading, isError])

  // Refetch new announcements when page changes
  useEffect(() => {
    refetch().catch((err) => console.error(err))
  }, [activePage, refetch])

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
