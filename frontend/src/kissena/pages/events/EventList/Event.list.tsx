import { useContext, useMemo } from "react";
import { EventSelectorContext } from "@kissena/pages/events/EventSelector";
import { Event } from "@/kissena/components/Event/Event";
import { Box, Stack, Title } from "@mantine/core";
import { EventData } from "@/types";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getEvents } from "@/api/events";
import { ErrorBlurb } from "@/kissena/components/ErrorBlurb/ErrorBlurb";
import { PlaceholderStack } from "@/kissena/components/PlaceholderStack/PlaceholderStack";

export function EventList() {
    const queryClient = useQueryClient()
  // const { activePage, ENTRIES_PER_PAGE } = useContext(PaginationContext)
    const activePage = 1; const ENTRIES_PER_PAGE = 5;
    const {search, selectedTeams, rangeStart, rangeEnd} = useContext(EventSelectorContext);

    // Fetch list of announcements
    const { data:events, isLoading, isError } = useQuery<EventData[]>({
      queryKey: ['events'],
      queryFn: () => {
        return getEvents(
          (activePage - 1) * ENTRIES_PER_PAGE,
          ENTRIES_PER_PAGE,
          rangeStart,
          rangeEnd
        )
      },
    });

    const noEventsFoundMessage = useMemo(() => {
      return <Stack mt={"10rem"} justify="center" align="center" >
              <Title c="neonGreen.7" >Whoops!</Title>
              <Title order={2} c="neonGreen.9">Looks like we could not find any events.</Title>
            </Stack>
    }, [])
    
    const content = useMemo(() => {
        if (isLoading) {
          return <PlaceholderStack hidden={!isLoading} />
        }
        if (isError) { return <ErrorBlurb /> }
        const filtered = (events ?? [])
            .filter((event) => 
                event.title.toLowerCase().includes(search.toLowerCase()) || 
                event.location.toLowerCase().includes(search.toLowerCase()))
            .filter((event) => selectedTeams.map(option => option.team).includes(event.team))
            .filter((event) => rangeStart <= event.date && event.date <= rangeEnd);
        
      console.log(filtered);


        return <>
          { filtered.map((event) => <Event {...event} key={event.id} />) }
          <Box hidden={filtered.length != 0}>
            {noEventsFoundMessage}
          </Box>
        </>

    }, [events, selectedTeams, search, rangeStart, rangeEnd, isLoading, isError, noEventsFoundMessage])

    return <Stack>
        {content}
    </Stack>
}