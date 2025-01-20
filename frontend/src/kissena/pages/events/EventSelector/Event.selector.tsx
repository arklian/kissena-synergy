import { Popover, Button, Group, Title, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import { EventSelectorContext } from "@kissena/pages/events/EventSelector";
import { DatePicker } from '@mantine/dates';
import { Calendar } from 'lucide-react';
import styles from '@kissena/pages/events/EventSelector/Event.selector.module.css'

export function EventSelector() {
    const [ datePickerOpened, setDatePickerOpened] = useState(false);
    const [ selectedDate, setSelectedDate ] = useState<Date | null>(new Date());
    const { rangeStart, rangeEnd, setDateRange } = useContext(EventSelectorContext)

    const today = new Date();
    const dateOptions:Intl.DateTimeFormatOptions = {
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
        <Group align="flex-end">
            <Stack gap={0}>
            <Title order={4} c={"neonGreen.9"}>Events</Title>
            <Title order={3} c="neonGreen.6">
            {stringifyDate(rangeStart)} - {stringifyDate(rangeEnd)}
            </Title>
            </Stack>
             <Popover width={300} trapFocus position="bottom" withArrow shadow="md" opened={datePickerOpened}>
                <Popover.Target>
                    <Button onClick={() =>  setDatePickerOpened(true)} size={'sm'} rightSection={<Calendar size={"1.2rem"}/>} variant="light">Change Date</Button>
                </Popover.Target>
                <Popover.Dropdown onMouseLeave={() => setDatePickerOpened(false)}>
                    <DatePicker classNames={{ "day" : styles.datePickerDay}} allowDeselect={false} defaultDate={new Date()} className={styles.datePickerDay}  value={selectedDate} onChange={
                        (value) => {
                            setSelectedDate(value);
                            setDatePickerOpened(false);
                            setDateRange(value ?? new Date());
                        }} />
                </Popover.Dropdown>
            </Popover>
        </Group>
    </Group>
    )
}