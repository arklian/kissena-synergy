import { Stack, Skeleton } from '@mantine/core'

interface PlaceholderStackProps {
  hidden?: boolean
  entries?: number
  opacity?: number
}

export function PlaceholderStack({
  hidden,
  entries,
  opacity,
}: PlaceholderStackProps) {
  return (
    <Stack>
      {Array.from(Array(entries ?? 5)).map((elem, index) => {
        return (
          <Skeleton
            hidden={hidden ?? false}
            key={index}
            h={200}
            opacity={opacity ?? 0.1}
          />
        )
      })}
    </Stack>
  )
}
