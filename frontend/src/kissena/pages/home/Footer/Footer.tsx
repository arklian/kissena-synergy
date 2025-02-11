import styles from '@kissena/pages/home/Footer/Footer.module.css'
import {
  Button,
  Text,
  Anchor,
  Group,
  Stack,
  Box,
  Divider,
  ActionIcon,
} from '@mantine/core'
import { FaFacebookSquare } from 'react-icons/fa'
import { TbBrandLinktree } from 'react-icons/tb'

const mailingListURL = ''

const links = [
  // {
  //   label: 'News',
  //   link: '',
  //   sublinks: [
  //     { link: 'events', label: 'Events' },
  //     { link: 'announcements', label: 'Announcements' },
  //   ],
  // },
  {
    label: 'About',
    link: '',
    sublinks: [
      { link: '/about', label: 'Our Mission' },
      // { link: 'team', label: 'Meet The Team' },
      // { link: 'partners', label: 'Partners' },
    ],
  },
  // {
  //   label: 'Resources',
  //   link: 'resources',
  //   sublinks: [],
  // },
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
        <Text size="xl" fw={600} c="neonGreen.6">
          {group.label}
        </Text>
        {group.sublinks.map((link, index) => (
          <Anchor
            href={link.link}
            size="lg"
            fw={400}
            c={'lightYellow.1'}
            key={index}
          >
            {link.label}
          </Anchor>
        ))}
      </Stack>
    )
  })

  return (
    <footer>
      <Stack className={styles.footerContainerWrapper} align={'center'}>
        <Stack
          className={styles.footerContainer}
          align="center"
          justify={'space-between'}
          w={'100%'}
          bg={'darkGreen.6'}
          mt={'2rem'}
        >
          <Group
            gap={'xl'}
            w={'100%'}
            py={'2rem'}
            align="flex-start"
            justify="space-between"
            wrap="wrap"
          >
            <Group w={'300px'}>
              <Text c={'lightYellow.1'} size="lg">
                Join our weekly newsletter to stay up-to-date with resources &
                opportunities to get involved
              </Text>
              <Box>
                <Button
                  autoContrast
                  size={'lg'}
                  color={'neonGreen.7'}
                  component="a"
                  href={mailingListURL}
                >
                  Join Here
                </Button>
              </Box>
            </Group>
            <Group align="flex-start">{groups}</Group>
          </Group>
          <Divider color={'darkGreen.5'} w={'100%'} />
          <SocialsIcons />
        </Stack>
      </Stack>
    </footer>
  )
}

function SocialsIcons() {
  return (
    <Group w={'100%'} justify="flex-end">
      <ActionIcon
        component="a"
        href={'https://www.facebook.com/groups/610957329304796'}
        c={'neonGreen.6'}
        variant="light"
        size={'xl'}
      >
        <FaFacebookSquare color="neonGreen.6" size={'24px'} />
      </ActionIcon>
      {/*<ActionIcon c={'neonGreen.6'} variant="light" component="a" size={'xl'}>*/}
      {/*  <FaInstagram color="neonGreen.6" size={'24px'} />*/}
      {/*</ActionIcon>*/}
      <ActionIcon
        component="a"
        href={'https://linktr.ee/kissenasynergy'}
        c={'neonGreen.6'}
        variant="light"
        size={'xl'}
      >
        <TbBrandLinktree color="neonGreen.6" size={'24px'} />
      </ActionIcon>
    </Group>
  )
}
