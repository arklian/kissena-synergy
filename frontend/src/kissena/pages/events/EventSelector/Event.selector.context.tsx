import { OptionData } from '@/types'
import { createContext } from 'react'

export const EventSelectorContext = createContext({
  rangeStart: new Date(),
  rangeEnd: new Date(),
  selectedTeams: [] as OptionData[],

  search: "",
  setSearch: (value:string) => {console.log(value); return; },

  setDateRange: (d:Date) => {
    console.log(d);
    return
  },

  toggleOption: (option:OptionData|undefined) => { console.log(option); return; },
  removeOption: (option:OptionData) => { console.log(option); return; }
})
