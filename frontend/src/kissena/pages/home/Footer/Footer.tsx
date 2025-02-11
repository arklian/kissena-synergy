import React from 'react'
import styles from '@kissena/pages/home/Footer/Footer.module.css'
// import { Facebook, Instagram } from 'lucide-react'
import {
  Button,
  Text,
  Input,
  Title,
  Anchor,
  Group,
  Stack,
  Space,
  Box,
  Divider,
  ActionIcon,
} from '@mantine/core'
import { FacebookIcon, InstagramIcon } from 'lucide-react'

const mailingListURL = ''

const links = [
  {
    label: 'News',
    link: '',
    sublinks: [
      { link: 'events', label: 'Events' },
      { link: 'announcements', label: 'Announcements' },
    ],
  },
  {
    label: 'About',
    link: '',
    sublinks: [
      { link: 'mission', label: 'Our Mission' },
      { link: 'team', label: 'Meet The Team' },
      { link: 'partners', label: 'Partners' },
    ],
  },
  {
    label: 'Resources',
    link: 'resources',
    sublinks: [],
  },
]

export function Footer() {
  const groups = links.map((group) => {
    if (!group.sublinks || group.sublinks.length === 0) {
      return (
        <Anchor href={group.link} fw={600} td={'underline'} key={group.label}>
          {group.label}
        </Anchor>
      )
    }
    return (
      <Stack key={group.label} gap={'0.3rem'}>
        <Text size="md" fw={600} c="neonGreen.6">
          {group.label}
        </Text>
        {group.sublinks.map((link, index) => (
          <Anchor size="sm" fw={400} c={'lightYellow.1'} key={index}>
            {link.label}
          </Anchor>
        ))}
      </Stack>
    )
  })

  return (
    <footer>
      <Stack
        align="center"
        bg={'darkGreen.6'}
        mt={'2rem'}
        bd={'solid 1px var(--mantine-color-darkGreen-5)'}
      >
        <Group
          className={styles.footerContainer}
          // w={{ sm: "100%", md: "800", lg: "1200"}}
          px="6rem"
          gap={'xl'}
          py={'2rem'}
          align="flex-start"
          justify="space-between"
          wrap="wrap"
        >
          <Group w={'300px'}>
            <Text c={'lightYellow.1'} size="sm">
              Join our weekly newsletter to stay up-to-date with resources &
              opportunities to get involved
            </Text>
            <Box>
              <Button
                autoContrast
                color={'neonGreen.7'}
                component="a"
                href={mailingListURL}
              >
                Join Here
              </Button>
            </Box>
          </Group>
          <Group visibleFrom="sm" align="flex-start">
            {groups}
          </Group>
          <Divider color={'darkGreen.5'} w={'100%'} />
          <Group w={'100%'} justify="flex-end">
            <ActionIcon
              c={'neonGreen.6'}
              variant="light"
              component="a"
              size={'xl'}
            >
              <FacebookIcon color="var(--mantine-color-neonGreen-6)" />
            </ActionIcon>
            <ActionIcon
              c={'neonGreen.6'}
              variant="light"
              component="a"
              size={'xl'}
            >
              <InstagramIcon color="var(--mantine-color-neonGreen-6)" />
            </ActionIcon>
          </Group>
        </Group>
      </Stack>
    </footer>
  )
}
