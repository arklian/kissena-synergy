import styles from '@kissena/pages/home/Home.module.css'
import Swiggle from '@kissena/pages/home/assets/swiggle.svg'
import {
  Stack,
  Image,
  Title,
  Group,
  Text,
  Divider,
  Anchor,
  ThemeIcon,
} from '@mantine/core'
import { motion } from 'motion/react'
import { PageContainer } from '@kissena/components/PageContainer/PageContainer.tsx'
import kissena_facebook from '@kissena/pages/home/assets/kissena_facebook.jpg'
import kissena_linktree from '@kissena/pages/home/assets/kissena_linktree.jpeg'
import { TbBrandLinktree } from 'react-icons/tb'
import { FaFacebookSquare } from 'react-icons/fa'

// import { AnnouncementBanner } from '@kissena/pages/home/AnnouncementBanner/Announcement.banner'
// import { EventCarousel } from './EventCarousel/Event.carousel'

// Create a motion-supported variant of Mantine components
const MotionTitle = motion.create(Title)
// Horizontal offset for the hero-text from left viewport edge
export const HEROTEXT_OFFSET_X = 100
const landingBrief =
  'Working together to restore the Kissena Velodrome and surrounding parklands, creating a vibrant community hub for all. Join us in making a positive impact on our neighborhood.'

export function HomePage() {
  return (
    <>
      {/*<AnnouncementBanner />*/}
      <Stack h={'100%'} align={'center'}>
        <Stack align={'center'} maw={'1800px'} w={'100%'}>
          <div className={styles.splashContainer}>
            <Stack className={styles.heroTextContainer} mt={'auto'}>
              <MotionTitle
                initial={{ opacity: 0, translateX: '-30%' }}
                animate={{ opacity: 1, translateX: '0' }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  scale: { type: 'easeOut' },
                }}
                className={styles.heroText}
                size={'xxl'}
                order={1}
              >
                Kissena
              </MotionTitle>
              <MotionTitle
                initial={{ opacity: 0, translateX: '-30%' }}
                animate={{ opacity: 1, translateX: '0' }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                  scale: { type: 'easeOut' },
                }}
                className={styles.heroText}
                size={'xxl'}
                order={1}
              >
                Synergy
              </MotionTitle>
              <Image mt={'1rem'} mb={'1rem'} w={'20em'} src={Swiggle} alt="" />
            </Stack>
            <Group className={styles.heroImageContainer}>
              <motion.div
                initial={{ opacity: 0, translateX: '-100%' }}
                animate={{ opacity: 1, translateX: '0' }}
                transition={{
                  duration: 0.2,
                  delay: 0.1,
                  scale: { type: 'easeOut' },
                }}
                className={styles.heroOverlay}
              />
            </Group>
          </div>
        </Stack>
      </Stack>
      <PageContainer>
        <Text
          px={'24px'}
          className={styles.description}
          c={'lightYellow.1'}
          size="xl"
          ta="left"
        >
          {landingBrief}
        </Text>
        <Divider mt={'xl'} mx={0} color={'neonGreen.6'} />
        {/*<Stack*/}
        {/*  align="center"*/}
        {/*  px={{ xs: 0, sm: HEROTEXT_OFFSET_X / 2, md: HEROTEXT_OFFSET_X }}*/}
        {/*>*/}
        {/*  <EventCarousel />*/}
        {/*</Stack>*/}
        <LinksSection />
      </PageContainer>
    </>
  )
}

function LinksSection() {
  return (
    <Stack align={'center'} pt={'24px'}>
      <LinkCard
        link={'https://www.facebook.com/groups/610957329304796'}
        text={
          'Find out more about current happenings in Kissena Synergy at our Facebook Group!'
        }
        image={kissena_facebook}
        icon={<FaFacebookSquare />}
        iconColor={'#4267B2'}
      />
      <LinkCard
        link={'https://linktr.ee/kissenasynergy'}
        text={'More resources from our partners on our Linktree!'}
        image={kissena_linktree}
        icon={<TbBrandLinktree />}
        iconColor={'#5af25d'}
      />
    </Stack>
  )
}

function LinkCard({
  link,
  text,
  image,
  icon,
  iconColor,
}: {
  link: string
  text: string
  image: string
  icon: any
  iconColor: string
}) {
  return (
    <Anchor href={link} w={'100%'} maw={'1000px'}>
      <Group
        className={styles.linkCard}
        justify={'space-around'}
        align={'center'}
        bd={'2px solid darkGreen.4'}
        bg={'darkGreen.5'}
        py={'24px'}
        px={'24px'}
      >
        <Group
          align={'flex-start'}
          justify={'flex-start'}
          flex={1}
          miw={'50%'}
          // maw={'70%'}
        >
          <Text size={'xl'} fw={700} c={'lightYellow.1'}>
            <ThemeIcon
              color={iconColor}
              autoContrast={true}
              // c={'darkGreen.7'}
              size={'lg'}
              mr={'12px'}
            >
              {icon}
            </ThemeIcon>
            {text}
          </Text>
        </Group>
        <Image h={'200px'} w={'200px'} radius={'md'} src={image}></Image>
      </Group>
    </Anchor>
  )
}
