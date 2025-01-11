import styles from '@kissena/pages/home/Home.module.css';
import Swiggle from '@kissena/pages/home/assets/swiggle.svg';
import { Stack, Image, Title, Group, Text } from '@mantine/core';

export function HomePage() {
  // Horizontal offset for the hero-text from left viewport edge
  const heroText_dx = 100;

  return (
    <>
    <Stack>
    <Stack h={'100%'} gap={'30'}>
      <div className={styles.splashContainer}>
        <Stack mt={'auto'} className={styles.heroTextContainer}>
          <Title className={styles.heroText} size={'xxl'} order={1}>Kissena</Title>
          <Title className={styles.heroText} size={'xxl'} order={1}>Synergy</Title>
          <Image mt={'1rem'} mb={'1rem'} w={'15em'} src={Swiggle} alt="" />
        </Stack>
        <Group className={styles.heroImageContainer}>
          <div className={styles.heroOverlay}></div>
        </Group>
      </div>
    </Stack>
    <Text pl={heroText_dx} pr={heroText_dx} className={styles.description} size='lg' ta='left'>
      { 'Lorem ipsum odor amet, consectetuer adipiscing elit. '
        +'Maecenas dapibus quisque tempor interdum maximus '
        + 'dictumst faucibus porttitor. Nulla faucibus gravida '
        + 'magna id habitant hac cras laoreet.'}
      </Text>
    </Stack>
    </>
  )
}
