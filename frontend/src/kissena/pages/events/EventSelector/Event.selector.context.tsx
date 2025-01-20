import { KissenaTeamOptionData } from '@/types'
import { createContext } from 'react'

export const EventSelectorContext = createContext({
  rangeStart: new Date(),
  rangeEnd: new Date(),
  selectedTeams: [] as KissenaTeamOptionData[],

  search: "",
  setSearch: (value:string) => {console.log(value); return; },

  setDateRange: (d:Date) => {
    console.log(d);
    return
  },

  toggleOption: (option:KissenaTeamOptionData|undefined) => { console.log(option); return; },
  removeOption: (option:KissenaTeamOptionData) => { console.log(option); return; }
})
