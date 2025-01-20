import { EventData, KissenaTeam } from "@/types";
import { Group, Stack, Text, Title, Button, Box } from "@mantine/core";
import { ExternalLink } from "lucide-react";
import styles from "@kissena/components/Event/Event.module.css"

export function Event({...props}:EventData) {
    const fullDateOptions:Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    const timeOptions:Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };

    const weekday = ["mon", 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'][props.date.getDay()];
    const dayNumber = props.date.getDate();

    const startTime = props.startTime 
        ? props.startTime.toLocaleTimeString('en-US', timeOptions) 
        : undefined;
        
        const endTime = props.endTime 
        ? " - " + props.endTime.toLocaleTimeString('en-US', timeOptions)
        : undefined;
        
        const dateExpanded = props.date.toLocaleDateString('en-US', fullDateOptions);

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
        {/* Desktop Version */}
        <Group  h={"20rem"} w={"100%"} wrap="nowrap" visibleFrom="sm">
            {/* Padding-left != padding right; for visual balance. */}
            <Stack h={"100%"} bg={resolveTeamColor(props.team)} w="auto" pl={"2rem"} pr={"2.3rem"} c={"lightYellow.1"} justify="center" align="center">
                <Title order={2} fw={200} tt={"uppercase"}>{weekday}</Title>
                <Title order={1} >{dayNumber}</Title>
                <Text size="lg">{startTime}</Text>
            </Stack>
            <Stack flex={1} justify="space-between" h="100%" p={"0.5rem 1rem 1.5rem 2rem"}>
                <Stack gap={'0.25rem'}>
                    <Text ml={"auto"} size="md" c={"lightYellow.1"} fw={400}>{dateExpanded}</Text>
                    <Group>
                        <Text c={"neonGreen.9"} size="md" fw={700}>
                            { startTime }
                            { endTime }
                        </Text>
                    </Group>
                    <Title visibleFrom="md" lh={"2.25rem"} order={2} c={"neonGreen.6"} lineClamp={3}>{props.title}</Title>
                    <Title hiddenFrom="md" order={3} c={"neonGreen.6"} lineClamp={3}>{props.title}</Title>
                    <Text size="lg" c={"neonGreen.9"}>{props.location}</Text>
                    <Box flex={1}>
                        <Text lineClamp={3} c="lightYellow.1">{props.description ?? ""}</Text>
                    </Box>
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
        {/* Mobile Version */}
        <Stack className={styles.eventContainer}  p={"1rem"} pb={"1.2rem"} hiddenFrom="sm">
            <Group gap={"1rem"} wrap="nowrap" align="flex-start">
                <Stack w={"5.5rem"} h={"5.5rem"} gap={0} bg={resolveTeamColor(props.team)} c={"lightYellow.1"} justify="center" align="center">
                    <Title order={3} fw={200} tt={"uppercase"}>{weekday}</Title>
                    <Title order={2} >{dayNumber}</Title>
                </Stack>
                <Stack flex={1} gap={0} >
                    <Group>
                        <Text c={"neonGreen.9"} size="md" fw={700}>
                            { startTime }
                            { endTime }
                        </Text>
                    </Group>
                    <Title order={4} c={"neonGreen.6"} lineClamp={3}>{props.title}</Title>
                    <Title order={4} c={"neonGreen.9"} fw={400} lineClamp={3}>{props.location}</Title>
                </Stack>
            </Group>
        <Text c="lightYellow.1" lineClamp={10}>{props.description ?? ""}</Text>
        <Text hidden={!props.partner || props.team !== 'partner'} c="lightYellow.1" fs={"italic"}>Partnered with {props.partner ?? ""}</Text>
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
        </Box>
    )
}