import styles from '@kissena/pages/home/Home.module.css'
import Swiggle from '@kissena/pages/home/assets/swiggle.svg'
import { Stack, Image, Title, Group, Text } from '@mantine/core'

import { motion } from 'motion/react'

// Create a motion-supported variant of Mantine components
const MotionTitle = motion.create(Title)

export function HomePage() {
  // Horizontal offset for the hero-text from left viewport edge
  const heroText_dx = 100

  return (
    <>
      <Stack>
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
          pl={heroText_dx}
          pr={heroText_dx}
          className={styles.description}
          size="lg"
          ta="left"
        >
          {'Lorem ipsum odor amet, consectetuer adipiscing elit. ' +
            'Maecenas dapibus quisque tempor interdum maximus ' +
            'dictumst faucibus porttitor. Nulla faucibus gravida ' +
            'magna id habitant hac cras laoreet.'}
        </Text>
      </Stack>
    </>
  )
}
