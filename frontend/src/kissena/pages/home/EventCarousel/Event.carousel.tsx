import { useMemo } from 'react'
import { Button, Group, Stack, Title } from '@mantine/core'
import { EventData } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { getEvents } from '@/api/events'
import { ErrorBlurb } from '@/kissena/components/ErrorBlurb/ErrorBlurb'
import { PlaceholderStack } from '@/kissena/components/PlaceholderStack/PlaceholderStack'
import { Carousel } from '@mantine/carousel'
import { EventCondensed } from '@/kissena/components/Event/Event.condensed'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from '@kissena/pages/home/EventCarousel/Event.carousel.module.css'

export function EventCarousel() {
  // Fetch list of announcements
  const {
    data: events,
    isLoading,
    isError,
  } = useQuery<EventData[]>({
    queryKey: ['events'],
    queryFn: () => {
      return getEvents(0, 6, new Date())
    },
  })

  const content = useMemo(() => {
    if (isLoading) {
      return <PlaceholderStack entries={1} hidden={!isLoading} />
    }
    if (isError) {
      return <ErrorBlurb />
    }

    return (
      <Carousel
        mb="40px"
        classNames={{
          control: styles.control,
          indicators: styles.indicators,
          indicator: styles.indicatorButtons,
        }}
        controlsOffset="xs"
        nextControlIcon={<ChevronRight size={16} />}
        previousControlIcon={<ChevronLeft size={16} />}
        loop
        withIndicators
        slideSize={{ sm: '50%', md: '34%' }}
        align="start"
        height={'auto'}
        slideGap="md"
        controlSize={30}
      >
        {(events ?? []).map((event) => (
          <Carousel.Slide key={event.id}>
            <EventCondensed {...event} />
          </Carousel.Slide>
        ))}
      </Carousel>
    )
  }, [events, isLoading, isError])

  return (
    <Stack w={"90%"} maw={"1200px"} id="event-carousel-container" mt={'xl'}>
      <Group justify="space-between">
        <Title order={2} c="neonGreen.6" mb={'md'}>
          Upcoming Events
        </Title>
        <Button size="md" href="/events" component="a" variant="light">
          See More
        </Button>
      </Group>
      {content}
    </Stack>
  )
}
