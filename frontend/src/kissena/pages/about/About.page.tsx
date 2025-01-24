import { PageContainer } from "@/kissena/components/PageContainer/PageContainer"
import { Box, Grid, Space, Stack, Text, Title, Image } from "@mantine/core"
import styles from '@kissena/pages/about/About.module.css';
import Logo from '@/assets/logo.png'

export function AboutPage() {
    return <>
        <PageContainer>
            <Stack gap={"xl"}>
                <Title c={"neonGreen.6"} order={1}>Who We Are</Title>    
                <Grid gutter="xl">
                    <Grid.Col span={12}>
                        <Title c={"neonGreen.9"} order={3}>Our Mission</Title>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 8}}>
                        <Title lh={"4.5rem"} className={styles.gradientText} order={1}>Lorem ipsum odor amet, consectetuer adipiscing elit. </Title>
                        <Space h={"sm"} />
                        <Text size="lg" c={"lightYellow.1"}>Maecenas dapibus quisque tempor interdum maximus dictumst faucibus porttitor. Nulla faucibus gravida magna id habitant hac cras laoreet. Dictumst adipiscing vehicula turpis aliquet libero venenatis. Duis nostra libero vehicula ultricies, mauris sodales velit. Et dapibus euismod ultrices lobortis ultricies mus semper. Integer sit sagittis, eget aliquet blandit lectus cras donec auctor. Nunc accumsan nec gravida consequat </Text>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4}}>
                        <Box visibleFrom="md" p={30} h={{ base: "300px", md: "500px"}} bg={"gray"}></Box>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Title c={"neonGreen.9"} order={2}>Why &quot;Kissena Synergy&quot;?</Title>
                    </Grid.Col>
                    <Grid.Col hiddenFrom="xs" span={{ base: 12, md: 6}}>
                        <Image p={30} w={"100%"} src={Logo} alt="Kissena Synergy Logo" />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, xs: 6}}>
                        <Stack>
                        <Text c={"lightYellow.1"}>Maecenas dapibus quisque tempor interdum maximus dictumst faucibus porttitor. Nulla faucibus gravida magna id habitant hac cras laoreet. Dictumst adipiscing vehicula turpis aliquet libero venenatis. Duis nostra libero vehicula ultricies, mauris sodales velit. Et dapibus euismod ultrices lobortis ultricies mus semper. Integer sit sagittis, eget aliquet blandit lectus cras donec auctor. Nunc accumsan nec gravida consequat </Text>
                        <Title order={3} c={"neonGreen.6"}>Kissena Green</Title>
                        <Text c={"lightYellow.1"}>Maecenas dapibus quisque tempor interdum maximus dictumst faucibus porttitor. Nulla faucibus gravida magna id habitant hac cras laoreet. </Text>
                        <Title order={3} c={"neonOrange.6"}>Kissena Orange</Title>
                        <Text c={"lightYellow.1"}>Maecenas dapibus quisque tempor interdum maximus dictumst faucibus porttitor. Nulla faucibus gravida magna id habitant hac cras laoreet. Dictumst adipiscing vehicula turpis aliquet libero venenatis. </Text>
                        <Title order={3} c={"blue.8"}>Kissena Blue</Title>
                        <Text c={"lightYellow.1"}>Maecenas dapibus quisque tempor interdum maximus dictumst faucibus porttitor. Nulla faucibus gravida magna id habitant hac cras laoreet. Dictumst adipiscing vehicula turpis aliquet libero venenatis. </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col visibleFrom="xs" span={{ base: 12, xs: 6}}>
                        <Image p={30} w={"100%"} src={Logo} alt="Kissena Synergy Logo" />
                    </Grid.Col>

                </Grid>
            </Stack>
        </PageContainer>
    </>
}