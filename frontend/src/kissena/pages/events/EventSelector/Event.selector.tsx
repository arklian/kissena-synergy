import { Group, Text, Title } from "@mantine/core";
import { useContext } from "react";
import { EventSelectorContext } from "@kissena/pages/events/EventSelector";

export function EventSelector() {
    const { rangeStart, rangeEnd } = useContext(EventSelectorContext)

    const today = new Date();
    const dateOptions:Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const stringifyDate = (date:Date) => {
        const isToday = 
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

        if (isToday) { return "Today"}
        return date.toLocaleDateString('en-US', dateOptions);
    }

    return (
    <Group justify="space-between" p={"1rem"}>
        <Group>
            <Title order={3} c="neonGreen.6">
            {stringifyDate(rangeStart)} - {stringifyDate(rangeEnd)}
            </Title>
            
        </Group>
    </Group>
    )
}