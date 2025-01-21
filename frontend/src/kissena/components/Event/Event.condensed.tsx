import { EventData, KissenaTeam } from "@/types";
import { Group, Stack, Text, Title, Button, Box, Space } from "@mantine/core";
import { ExternalLink } from "lucide-react";
import styles from "@kissena/components/Event/Event.module.css"

export function EventCondensed({...props}:EventData) {

    const timeOptions:Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };
    
    const dayNumber = props.date.getDate();
    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][props.date.getDay()];
    const monthAbbrev =  [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][props.date.getMonth()];

    const startTime = props.startTime 
        ? props.startTime.toLocaleTimeString('en-US', timeOptions) 
        : undefined;
        
    const endTime = props.endTime 
        ? props.endTime.toLocaleTimeString('en-US', timeOptions)
        : undefined;
        
    const resolveTeamColor = (team:KissenaTeam) => {
        switch(team) {
            case 'green': return "darkGreen.5"
            case 'blue': return "blue.9"
            case 'orange': return "neonOrange.9"
            case 'partner': return "darkGreen.8"
            default: return "darkGreen.8"
        }
    }

    return (
        <Box bg={"darkGreen.6"} className={styles.eventContainer} data-event-id={props.id}>
        <Group c="lightYellow.1" h={"15rem"} w={550} wrap="nowrap" gap={0}>
            <Stack gap={"0.25rem"} h={"100%"} bg={resolveTeamColor(props.team)} px={"2rem"} w={180} justify="center">
                <Group gap={"xs"}>
                    <Title order={2} >{dayNumber}</Title>
                    <Title order={2} fw={200} tt={"uppercase"}>{monthAbbrev}</Title>
                </Group>
                <Text size="sm" c="lightYellow.1">{weekday}</Text>

                <Space h="sm" />
                <Group gap={"5"}>
                <Text fw={700} size="sm">{startTime}</Text>
                <Text hidden={!endTime} fw={500} size="sm">to</Text>
                <Text hidden={!endTime} fw={700} size="sm">{endTime}</Text>
                </Group>
            </Stack>
            <Stack flex={1} justify="space-between" h="100%" p={"1.5rem 1rem 1.5rem 2rem"}>
                <Stack gap={'0.25rem'}>
                    <Title order={4} c={"neonGreen.6"} lineClamp={3}>{props.title}</Title>
                    <Text size="md" c={"neonGreen.9"}>{props.location}</Text>
                </Stack>
                <Box hidden={!props.learnMoreUrl}>
                <a href={props.learnMoreUrl ?? ""}>
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
        </Group>
        </Box>
    )
}