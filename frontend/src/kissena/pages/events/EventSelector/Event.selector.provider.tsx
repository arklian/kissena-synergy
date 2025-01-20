import { useState, PropsWithChildren } from 'react'
import { allTeams, EventSelectorContext } from '@kissena/pages/events/EventSelector'
import { KissenaTeamOptionData} from '@/types';


export function EventSelectorProvider(props: PropsWithChildren) {
    const [rangeStart, setRangeStart] = useState<Date>(
        () =>  {
            const date = new Date();
            date.setHours(0,0,0,0);
            return date;
        }
    );
    const [rangeEnd, setRangeEnd] = useState<Date>(
        () => {
            const date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(date.getDate() + 7);
            return date;
        }
    );

    const [search, setSearch] = useState<string>("");

    const [selectedTeams, setSelectedTeams] = useState<KissenaTeamOptionData[]>(allTeams);

    // Add team if not in selected, otherwise remove
    const toggleOption = (option:KissenaTeamOptionData | undefined) => {
        if (!option) return;
        setSelectedTeams((current:KissenaTeamOptionData[]) =>
            current.includes(option) 
                ? current.filter((selected) => selected !== option) 
                : [...current, option]
        );
    }

    // Stricly remove the specified team
    const removeOption = (option:KissenaTeamOptionData) => {
        setSelectedTeams((current) => current.filter((selected:KissenaTeamOptionData) => selected !== option));
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
        value={{ rangeStart, rangeEnd, selectedTeams, setDateRange, toggleOption, removeOption, search, setSearch }}
    >
        {props.children}
    </EventSelectorContext.Provider>
)
}
