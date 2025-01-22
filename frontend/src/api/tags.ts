import axios from 'axios'
import { HOSTNAME } from './config'
import { TagData } from '@/types'

export function getTags(): Promise<TagData[]> {
  return axios
    .get<TagData[]>(`${HOSTNAME}/resources/tags`)
        .then((res) => res.data)
}