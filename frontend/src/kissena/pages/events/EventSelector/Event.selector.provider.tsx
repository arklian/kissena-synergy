import { useState, PropsWithChildren } from 'react'
import { EventSelectorContext } from '@kissena/pages/events/EventSelector'
import { KissenaTeam } from '@/types';

export function EventSelectorProvider(props: PropsWithChildren) {
    const [rangeStart, setRangeStart] = useState<Date>(new Date());
    const [rangeEnd, setRangeEnd] = useState<Date>(
        () => {
            const date = new Date();
            date.setDate(date.getDate() + 7);
            return date;
        }
    );

    const [search, setSearch] = useState<string>("");

    const [selectedTeams, setSelectedTeams] = useState<KissenaTeam[]>(['green', 'orange', 'blue', 'partner']);

    // Add team if not in selected, otherwise remove
    const toggleTeam = (team:KissenaTeam) => {
        setSelectedTeams((current) =>
            current.includes(team) 
                ? current.filter((selected) => selected !== team) 
                : [...current, team]
        );
    }

    // Stricly remove the specified team
    const removeTeam = (team:KissenaTeam) => {
        setSelectedTeams((current) => current.filter((selected) => selected !== team));
    }

    // Move the date range window to a week following the parameter date 
    const setDateRange = (newRangeStart:Date) => {
        setRangeStart(newRangeStart);
        const newRangeEnd = new Date();
        newRangeEnd.setDate(newRangeStart.getDate() + 7);
        setRangeEnd(newRangeEnd);
    }

    return (
    <EventSelectorContext.Provider
        value={{ rangeStart, rangeEnd, selectedTeams, setDateRange, toggleTeam, removeTeam, search, setSearch }}
    >
        {props.children}
    </EventSelectorContext.Provider>
)
}
