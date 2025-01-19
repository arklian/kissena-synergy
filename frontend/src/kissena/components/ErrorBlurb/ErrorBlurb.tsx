import { Text, Stack } from "@mantine/core"

export function ErrorBlurb({color}:{color?:string}) {
    return (
    <Stack w={300} gap={0}>
        <Text c={color ?? "neonGreen.6"} size="xl">Uh Oh!</Text>
        <Text opacity={0.7} c={color ?? "neonGreen.6"} size="lg">An error occurred.</Text>
    </Stack>
    )
}