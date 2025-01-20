import { useContext, useMemo } from "react";
import { EventSelectorContext } from "@kissena/pages/events/EventSelector";
import { Event } from "@/kissena/components/Event/Event";
import { Box, Stack, Title } from "@mantine/core";
import { EventData, KissenaTeam } from "@/types";


const placeholder = [
  {
    id: crypto.randomUUID(),
    title: "The Curious Incident of the Dog in the Night-Time",
    location: "Kissena Velodrome, Flushing NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    team: 'green' as KissenaTeam,
    partner: "some-partner",
    learnMoreUrl: "https://google.com"
  },
  {
    id: crypto.randomUUID(),
    title: "The Curious Incident of the Dog in the Night-Time",
    location: "Kissena Velodrome, Flushing NY",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", // Assuming missing description is intentional
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    team: 'orange' as KissenaTeam,
    partner: "some-partner",
    // learnMoreUrl: "https://google.com"
  },
  {
    id: crypto.randomUUID(),
    title: "The Curious Incident of the Dog in the Night-Time",
    location: "Kissena Velodrome, Flushing NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: new Date(),
    // startTime: new Date(), 
    // endTime: new Date(), 
    team: 'blue' as KissenaTeam,
    partner: "some-partner",
    learnMoreUrl: "https://google.com"
  },
  {
    id: crypto.randomUUID(),
    title: "The Curious Incident of the Dog in the Night-Time",
    location: "Kissena Velodrome, Flushing NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: new Date(),
    // startTime: new Date(), 
    // endTime: new Date(), 
    team: 'partner' as KissenaTeam,
    partner: "some-partner",
    learnMoreUrl: "https://google.com"
  }
]

export function EventList() {
    const {search, selectedTeams, rangeStart, rangeEnd} = useContext(EventSelectorContext);
    const events:EventData[] = placeholder;

    const filtered = useMemo(() => {
        return events
            .filter((event) => 
                event.title.toLowerCase().includes(search.toLowerCase()) || 
                event.location.toLowerCase().includes(search.toLowerCase()))
            .filter((event) => selectedTeams.map(option => option.team).includes(event.team))
            .filter((event) => rangeStart <= event.date && event.date <= rangeEnd)
    }, [events, selectedTeams, search, rangeStart, rangeEnd])

    console.log(filtered.length);

    return <Stack>
        { filtered.map((event) => <Event {...event} key={event.id} />) }
        <Box hidden={filtered.length != 0}>
        <Stack mt={"10rem"} justify="center" align="center" >
            <Title c="neonGreen.7" >Whoops!</Title>
            <Title order={2} c="neonGreen.9">Looks like we could not find any events.</Title>
        </Stack>
        </Box>
    </Stack>
}