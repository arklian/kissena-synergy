import React from 'react';
import { KissenaTheme } from './theme'; 
import './theme.module.css';
import logo from './logo1.png';
import { Container, Header as MantineHeader, Text, Group, Anchor } from '@mantine/core';

const Header: React.FC = () => {
  return (
    <MantineHeader
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#0D1608',
        borderBottom: `1px solid ${KissenaTheme.colors.neonGreen[7] || '#609D37'}`,
      }}
    >
      <Container style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Kissena Synergy Logo" style={{ width: '88px', height: '88px', marginRight: '16px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text className="kissena" style={{ color: '#B8F000', fontSize: '30px', fontWeight: 700 }}>
            Kissena
          </Text>
          <Text className="synergy" style={{ color: '#F6790A', fontSize: '30px', fontWeight: 700 }}>
            Synergy
          </Text>
        </div>
      </Container>

      <nav style={{ display: 'flex', gap: '20px' }}>
        <Group spacing="xs">
          <Anchor href="#announcements" style={{ fontSize: '20px', fontWeight: '600' }}>
            Announcements
          </Anchor>
          <Anchor href="#events" style={{ fontSize: '20px', fontWeight: '600' }}>
            Events
          </Anchor>
          <Anchor href="#learn-more" style={{ fontSize: '20px', fontWeight: '600' }}>
            Learn More
          </Anchor>
        </Group>
      </nav>
    </MantineHeader>
  );
};

export default Header;
