import { EventData, KissenaTeam } from "@/types";
import { Group, Stack, Text, Title, Button, Box } from "@mantine/core";
import { ExternalLink } from "lucide-react";

export function Event({...props}:EventData) {
    const fullDateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };

    const weekday = ["mon", 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'][props.date.getDay()];
    const dayNumber = props.date.getDate();

    const startTime = props.startTime ? props.startTime.toLocaleTimeString('en-US', timeOptions) : "";
    const endTime = props.endTime ? props.endTime.toLocaleTimeString('en-US', timeOptions) : "";
    
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

    return <Group h={"20rem"} w={"100%"} wrap="nowrap">
        {/* Padding-left != padding right; for visual balance. */}
        <Stack h={"100%"} bg={resolveTeamColor(props.team)} w="auto" pl={"2rem"} pr={"2.3rem"} c={"neonGreen.6"} justify="center" align="center">
            <Title order={2} fw={200} tt={"uppercase"}>{weekday}</Title>
            <Title order={1} >{dayNumber}</Title>
            <Text size="lg">{startTime}</Text>
        </Stack>
        <Stack flex={1} justify="space-between" h="100%" p={"0.5rem 1rem 1.5rem 2rem"}>
            <Stack gap={'0.25rem'}>
                <Text ml={"auto"} size="md" c={"lightYellow.1"} fw={400}>{dateExpanded}</Text>
                <Group hidden={!startTime}>
                    <Text c={"neonGreen.9"} size="md" fw={700}>
                        {startTime}
                        { endTime 
                            ? " - " + endTime
                            : ""
                        }
                    </Text>
                </Group>
                <Title visibleFrom="md" order={2} c={"neonGreen.6"}>{props.title}</Title>
                <Title hiddenFrom="md" order={3} c={"neonGreen.6"}>{props.title}</Title>
                <Text size="lg" c={"neonGreen.9"}>{props.location}</Text>
                <Box flex={1}>
                    <Text lineClamp={3} c="lightYellow.1">{props.description ?? ""}</Text>
                </Box>
            </Stack>
            <Box>
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
            </Box>
        </Stack>
    </Group>
}