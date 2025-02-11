import styles from '@kissena/pages/home/Home.module.css'
import Swiggle from '@kissena/pages/home/assets/swiggle.svg'
import { Footer } from '@kissena/pages/home/Footer/Footer.tsx'
import { Stack, Image, Title, Group, Text, Box, Divider } from '@mantine/core'
import { motion } from 'motion/react'

import { AnnouncementBanner } from '@kissena/pages/home/AnnouncementBanner/Announcement.banner'
import { EventCarousel } from './EventCarousel/Event.carousel'

// Create a motion-supported variant of Mantine components
const MotionTitle = motion.create(Title)
// Horizontal offset for the hero-text from left viewport edge
export const HEROTEXT_OFFSET_X = 100
const landingBrief =
  'We work together to restore the Kissena Velodrome and surrounding parklands, creating a vibrant community hub for all. Join us in making a positive impact on our neighborhood.'

export function HomePage() {
  return (
    <>
      <Stack gap={0}>
        <AnnouncementBanner />
        <Stack h={'100%'} gap={'30'}>
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
        <Text
          pl={HEROTEXT_OFFSET_X}
          pr={HEROTEXT_OFFSET_X}
          pt={'1rem'}
          className={styles.description}
          size="lg"
          ta="left"
        >
          {landingBrief}
        </Text>
        <Divider mt={'xl'} color={'neonGreen.6'} />
        <Stack px={{ xs: 0, sm: HEROTEXT_OFFSET_X / 2, md: HEROTEXT_OFFSET_X }}>
          <EventCarousel />
        </Stack>
      </Stack>
      <Footer />
    </>
  )
}
