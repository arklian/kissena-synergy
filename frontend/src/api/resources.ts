import axios from 'axios'
import { HOSTNAME } from './config'
import { UnlinkedResource } from '@/types'

export function getResources(): Promise<UnlinkedResource[]> {
  return axios
    .get<UnlinkedResource[]>(`${HOSTNAME}/resources`)
        .then((res) => res.data)
}