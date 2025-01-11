import { PageContainer } from '@/kissena/components/PageContainer';
import styles from '@kissena/pages/home/Home.module.css';
import Swiggle from '@kissena/pages/home/assets/swiggle.svg';
import { Stack, Image, Title, Group, Text } from '@mantine/core';

export function HomePage() {

  return (
    <PageContainer>
      <Stack h={'100%'} gap={'30'} className={ styles.homeContainer }>
        <div className={styles.splashContainer}>
          <Stack mt={'auto'} className={styles.heroTextContainer}>
            <Title className={styles.heroText} size={'xxl'} order={1}>Kissena</Title>
            <Title className={styles.heroText} size={'xxl'} order={1}>Synergy</Title>
            <Image mt={'1rem'} mb={'1rem'} w={'13em'} src={Swiggle} alt="" />
          </Stack>
          <Group className={styles.heroImageContainer}>
            {/* <HeroOverlay /> */}
          </Group>
        </div>
        <Text className={styles.description} size='lg' ta='left'>
          { 'Lorem ipsum odor amet, consectetuer adipiscing elit. '
            +'Maecenas dapibus quisque tempor interdum maximus '
            + 'dictumst faucibus porttitor. Nulla faucibus gravida '
            + 'magna id habitant hac cras laoreet.'}
          </Text>
      </Stack>
    </PageContainer>
  )
}
