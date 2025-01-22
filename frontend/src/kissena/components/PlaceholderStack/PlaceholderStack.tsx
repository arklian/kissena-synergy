import { Stack, Skeleton } from '@mantine/core'

interface PlaceholderStackProps {
  hidden:boolean,
  entries?:number
}

export function PlaceholderStack({ hidden, entries }: PlaceholderStackProps) {
  return (
    <Stack>
      {Array.from(Array(entries ?? 5)).map((elem, index) => {
        return <Skeleton hidden={hidden} key={index} h={200} opacity={0.1} />
      })}
    </Stack>
  )
}
