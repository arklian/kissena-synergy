import { Box, Container, Group, Stack, Text, TextInput, Button, SimpleGrid } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <Box component="footer" bg="darkGreen.6" mt="xl">
      <Container size="xl" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
    
          <Stack>
            <Text size="md" c="lightYellow.1" maw={300}>
              Join our weekly newsletter to stay up-to-date with resources & opportunities to get involved
            </Text>
            <form onSubmit={handleSubmit}>
              <Group>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  styles={{
                    input: {
                      backgroundColor: 'transparent',
                      borderColor: 'var(--mantine-color-neonGreen-6)',
                      color: 'var(--mantine-color-lightYellow-1)',
                    }
                  }}
                />
                <Button 
                  type="submit"
                  variant="filled"
                  color="neonGreen.6"
                >
                  Notify Me!
                </Button>
              </Group>
            </form>
          </Stack>

    
          <Stack>
            <Text size="xl" fw={700} c="neonGreen.6">Connect</Text>
            <Stack gap="xs">
              <Group gap="xs">
                <IconBrandFacebook size={24} color="var(--mantine-color-neonGreen-6)" />
                <Text component="a" href="#" c="lightYellow.1" style={{ textDecoration: 'none' }}>
                  Facebook
                </Text>
              </Group>
              <Group gap="xs">
                <IconBrandInstagram size={24} color="var(--mantine-color-neonGreen-6)" />
                <Text component="a" href="#" c="lightYellow.1" style={{ textDecoration: 'none' }}>
                  Instagram
                </Text>
              </Group>
            </Stack>
          </Stack>


          <Stack>
            <Text size="xl" fw={700} c="neonGreen.6">News</Text>
            <Stack gap="xs">
              <Text component={Link} to="/events" c="lightYellow.1" style={{ textDecoration: 'none' }}>
                Upcoming Events
              </Text>
              <Text component={Link} to="/events/recent" c="lightYellow.1" style={{ textDecoration: 'none' }}>
                Recent Events
              </Text>
              <Text component={Link} to="/announcements" c="lightYellow.1" style={{ textDecoration: 'none' }}>
                Announcements
              </Text>
            </Stack>
          </Stack>

 
          <Stack>
            <Text size="xl" fw={700} c="neonGreen.6">About</Text>
            <Stack gap="xs">
              <Text component={Link} to="/mission" c="lightYellow.1" style={{ textDecoration: 'none' }}>
                Our Mission
              </Text>
              <Text component={Link} to="/team" c="lightYellow.1" style={{ textDecoration: 'none' }}>
                Meet The Team
              </Text>
              <Text component={Link} to="/partners" c="lightYellow.1" style={{ textDecoration: 'none' }}>
                Partners
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
