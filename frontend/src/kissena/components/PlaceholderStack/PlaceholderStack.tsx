import { Stack, Skeleton } from '@mantine/core'

export function PlaceholderStack({ hidden }: { hidden: boolean }) {
  return (
    <Stack>
      {Array.from(Array(5)).map((elem, index) => {
        return <Skeleton hidden={hidden} key={index} h={200} opacity={0.1} />
      })}
    </Stack>
  )
}
