import { KissenaTeam } from '@/types'
import { createContext } from 'react'

export const EventSelectorContext = createContext({
  rangeStart: new Date(),
  rangeEnd: new Date(),
  selectedTeams: [] as KissenaTeam[],

  search: "",
  setSearch: (value:string) => {console.log(value); return; },

  setDateRange: (d:Date) => {
    console.log(d);
    return
  },

  toggleTeam: (team:KissenaTeam) => { console.log(team); return; },
  removeTeam: (team:KissenaTeam) => { console.log(team); return; }
})
