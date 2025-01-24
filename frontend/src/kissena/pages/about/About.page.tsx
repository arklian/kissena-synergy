import { PageContainer } from "@/kissena/components/PageContainer/PageContainer"
import { Box, Grid, Space, Stack, Text, Title, Image } from "@mantine/core"
import styles from '@kissena/pages/about/About.module.css';
import Logo from '@/assets/logo.png'

const actionBlurb = "Rooted in nature, growing stronger communities."
const missionText = "Our mission is to advocate for and participate in the continued cooperative upkeep, maintenance and transformation of the Kissena Velodrome and the Park's grounds surrounding and leading to and from [it], as an enclosed cycling track offering safe and productive healthy ride opportunities for recreational cyclists as well as provide a proper training and racing facility for competitive track cyclists.";

const whyKissenaText = "In 2019, we updated our name to Kissena Synergy to reflect our interest, advocacy and participation in serving together with community partners to maintain and improve our community green spaces.";
const kissenaGreenText = "Kissena Green is our division dedicated to the upkeep, transformation, and maintenance of the Kissena Velodrome and its surrounding park grounds. By partnering with community organizations, we advocate for sustainable green spaces that provide recreational opportunities for cyclists and a welcoming environment for all."
const kissenaOrangeText = "Kissena Orange empowers individuals and families through programs that address local needs, from education to essential resources. We strive to create inclusive opportunities for growth, connection, and shared prosperity."
const kissenaBlueText = "Kissena Blue is devoted to inspiring active participation and collaboration in shaping policies and initiatives that benefit everyone. By uniting voices and fostering leadership, we drive meaningful change in communities."

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
                        <Title lh={"4.5rem"} className={styles.gradientText} order={1}>{actionBlurb}</Title>
                        <Space h={"sm"} />
                        <Text size="lg" c={"lightYellow.1"}>{ missionText }</Text>
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
                        <Text size="lg" c={"lightYellow.1"}>{ whyKissenaText }</Text>
                        <Title order={3} c={"neonGreen.6"}>Kissena Green</Title>
                        <Text c={"lightYellow.1"}>{ kissenaGreenText }</Text>
                        <Title order={3} c={"neonOrange.6"}>Kissena Orange</Title>
                        <Text c={"lightYellow.1"}>{ kissenaOrangeText }</Text>
                        <Title order={3} c={"blue.8"}>Kissena Blue</Title>
                        <Text c={"lightYellow.1"}>{ kissenaBlueText }</Text>
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