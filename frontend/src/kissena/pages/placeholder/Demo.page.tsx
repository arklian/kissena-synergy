import { Button, Text, Title, useMantineTheme } from '@mantine/core'

export function DemoPage() {
  const theme = useMantineTheme()
  return (
    <>
      <Title
        order={1}
        style={{
          color: theme.colors.neonGreen[6],
        }}
      >
        Primary
      </Title>
      <Title
        order={2}
        style={{
          color: theme.colors.darkGreen[6],
        }}
      >
        Subtitle
      </Title>
      <Text>Some Body Text</Text>
      <Button color="lightYellow.6">Click Me</Button>
      <Button>Click Me</Button>
      {/* <Outlet /> */}
    </>
  )
}
