import {  Button, Group, Title, Stack, Text, TextInput, Drawer, Divider, Checkbox } from "@mantine/core";
import { useContext, useState } from "react";
import { allTeams, EventSelectorContext } from "@kissena/pages/events/EventSelector";
import {  DatePicker } from '@mantine/dates';
import {  Search, SlidersHorizontal } from 'lucide-react';
import styles from '@kissena/pages/events/EventSelector/Event.selector.module.css'
import { useDisclosure } from "@mantine/hooks";
import { OptionData } from "@/types";

function SelectOptionMobile({label, description, color}:OptionData) {
    return <Stack gap={0}>
                <Text c={color} fw={700}>{label}</Text>
                <Text size='sm'>{description}</Text>
            </Stack>
}

export function EventSelectorMobile() {
    const [opened, { open, close }] = useDisclosure(false);
    const [searchBuffer, setSearchBuffer] = useState("");

    const [ selectedDate, setSelectedDate ] = useState<Date | null>(new Date());
    const { rangeStart, rangeEnd, setDateRange, setSearch, selectedTeams, toggleOption } = useContext(EventSelectorContext)

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
        <>
            <Stack gap={0}>
                <Title order={5} c={"neonGreen.9"}>Events</Title>
                <Group justify="space-between">
                    <Title order={4} c="neonGreen.6">{stringifyDate(rangeStart)} - {stringifyDate(rangeEnd)}</Title>
                    <Button variant="light" onClick={open} rightSection={<SlidersHorizontal size={20} />}>Filter</Button>
                </Group>
            </Stack>
            <Drawer position="right" className={styles.filterDrawer} classNames={{ 'header': styles.filterDrawer, 'content': styles.filterDrawer }} opened={opened} onClose={close} overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}>
                <Stack h="100%" px={"1rem"}>
                <Title c={"darkGreen.4"} order={3}>Filter Events</Title>
                <Divider />
                

                <DatePicker size="lg" classNames={{ "day" : styles.datePickerDay}} allowDeselect={false} defaultDate={new Date()} className={styles.datePickerDay}  value={selectedDate} onChange={
                    (value) => {
                        setSelectedDate(value);
                        setDateRange(value ?? new Date());
                        close();
                    }} />

                <Divider />

                <TextInput size="md" label="Search Events" placeholder="Search a title or location..." value={searchBuffer} onChange={(event) => setSearchBuffer(event.target.value)} leftSection={<Search size={15} />} />
                <Button color="darkGreen.5" onClick={() => {setSearch(searchBuffer); close(); }}>Search</Button> 

                <Divider />
                <Title order={4} c="darkGreen.5">Event Teams</Title>
                
                {allTeams.map((teamOption:OptionData) => 
                    <Checkbox 
                        autoContrast 
                        key={teamOption.team} 
                        checked={selectedTeams.includes(teamOption)}
                        onChange={() => toggleOption(teamOption)}
                        label={<SelectOptionMobile  {...teamOption} />
                    } />
                ) }
                <Button mt={"sm"} color={"darkGreen.5"} onClick={close}>Save</Button>
                </Stack>
            </Drawer>
        </>
    )
}