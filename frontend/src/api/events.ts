import axios from 'axios'
import { HOSTNAME } from './config'
import { EventData, EventResponse, KissenaTeam } from '@/types'

export function getEventCount(): Promise<number> {
  return axios
    .get<string>(`${HOSTNAME}/event/count`)
    .then((res) => parseInt(res.data))
}

export function getEvents(
  offset: number,
  entryCount: number,
  startRange: Date,
  endRange?: Date,
): Promise<EventData[]> {
  const formatRaw = (item: EventResponse): EventData => {
    return {
      ...item,
      date: new Date(item.date),
      startTime: item.startTime ? new Date(item.startTime) : undefined,
      endTime: item.endTime ? new Date(item.endTime) : undefined,
      team: item.team as KissenaTeam,
    }
  }

  const payload = {
    offset: offset,
    entryCount: entryCount,
    startRange: startRange.toISOString(),
    endRange: endRange ? endRange.toISOString() : undefined,
  }

  return axios
    .get<EventResponse[]>(
      `${HOSTNAME}/events/${offset}/${entryCount}/${payload.startRange}/${payload.endRange ?? ''}`,
    )
    .then((res) => res.data)
    .then((res) => res.map((item) => formatRaw(item)))
    .then((arr) => {
      arr.sort((e1, e2) => {
        // Sort events by date of occurrence
        if (e1.date < e2.date) {
          return -1
        }
        if (e1.date > e2.date) {
          return 1
        }

        // Then, if possible, group all events on the same day
        // with a startTime & sort them.
        if (e1?.startTime && e2?.startTime) {
          return e1.startTime < e2.startTime ? -1 : 1
        }
        if (e1?.startTime) {
          return -1
        }
        if (e2?.startTime) {
          return 1
        }
        return 0
      })
      return arr
    })
}
