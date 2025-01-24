import { Title, Text, Grid, Card, Stack, Box, Image, Container } from '@mantine/core'
import Daniel from "@kissena/pages/team/daniel.png"
import Subir from "@kissena/pages/team/subir.png"

export default function TeamSection() {
  const teamMembers = [
    { name: "Daniel", title: "Project Lead", image: Daniel},
    { name: "Henry", title: "Mentor", image: '' },
    { name: "Subir", title: "Coder", image: Subir },
    { name: "Elhadji", title: "Coder", image: '' },
    { name: "Proma", title: "Coder", image: '' },
    { name: "Kissena Member", title: "Member", image: ''}
  ];

  return (
    <Box p="xl" bg="darkGreen.6">
      <Container size="xl" px="xl">
        <Stack gap="xl">
          <Stack gap="xs">
            <Title order={1} size="3rem" c="neonGreen.6">
              Meet the Team
            </Title>
            <Text size="xl" c="lightYellow.1">
              The team behind Kissena Synergy
            </Text>
          </Stack>

          <Grid gutter="xl">
            {teamMembers.map((member, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Stack gap="md" align="center">
                  <Card 
                    shadow="sm" 
                    padding="0" 
                    radius="md" 
                    withBorder
                    style={{ 
                      width: '100%',
                      maxWidth: '320px',
                      margin: '0 auto'
                    }}
                  >
                    <Box 
                      style={{ 
                        position: 'relative',
                        paddingTop: '125%',
                        width: '100%'
                      }}
                    >
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name} profile photo`}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      ) : (
                        <Box 
                          style={{ 
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'var(--mantine-color-gray-1)'
                          }}
                        >
                        </Box>
                      )}
                    </Box>
                  </Card>
                  <Stack gap={0} align="center">
                    <Text size="xl" fw={600} c="neonGreen.6">
                      {member.name}
                    </Text>
                    <Text size="lg" c="neonGreen.6">
                      {member.title}
                    </Text>
                  </Stack>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}