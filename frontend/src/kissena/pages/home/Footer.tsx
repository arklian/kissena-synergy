import React, { useState } from 'react'
import { KissenaTheme } from '../../theme'
import { FaFacebookF, FaInstagramSquare, FaInstagram } from 'react-icons/fa'
import { Grid, Paper} from '@mantine/core'
import {  TextInput } from '@mantine/core'
import { data } from 'react-router-dom'
import { Button, Text, Input, Title, Anchor, Group, Stack, useMantineTheme } from '@mantine/core'
//import  { useState } from 'react';

const links = [
    {
       // link: '',
        label: 'News',
        sublinks: [
            {link: '', label: 'Upcoming Events'},
            {link: '', label: 'Recent events'},
            {link: '', label: 'Announcements'}
        ],
    },
    {
       // link: '',
        label: 'About',
        sublinks: [
            {link: '', label: 'Our Mission'},
            {link: '', label: 'Meet The Team'},
            {link: '', label: 'Partners'}
        ],

    },
    {

       // link: '',
        label: 'Resources',
        sublinks: [
            {link: '', label: ''},
            {link: '', label: ''},
            {link: '', label: ''}
        ],



    },

   { link: '',
        label: '',
        sublinks: [
            {link: '', label: ''},
            {link: '', label: ''},
            {link: '', label: ''}
        ]
   }
]






export const Footer = () => {
    const theme = useMantineTheme()
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value)
    }
const handleNotify = () => {
    if(email.trim() === '' ) {
        setMessage("Invalid email address.")
        return;
    }

    setMessage('Notification sen to ${email}')
    setEmail('')
    
}



return (
  <footer
    style={{
      padding: '20px 40px',
      backgroundColor: '#0D1608',
      color: '#FFF4B9',
    }}
  >
    <Group spacing="xl" align="flex-start" grow>
      {/* Newsletter Section */}
      <Stack spacing="sm" style={{ flex: 1 }}>
        <Text style={{ fontSize: '16px', color: '#FFF4B9' }}>
          Join our weekly newsletter to stay up-to-date with resources &
          opportunities to get involved
        </Text>
        <Group align="center">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={{
              color: '#FFF4B9',
              borderBottom: '1px solid #88F000',
              padding: '8px 12px',
              width: '200px',
            }}
          />
          <Button
            onClick={handleNotify}
            style={{
              backgroundColor: '#375421',
              color: '#B8F000',
              padding: '10px 10px',
              borderRadius: '8px',
              fontWeight: 600,
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '16px',
              transition: '0.3s ease-in-out',
            }}
          >
            Notify Me!
          </Button>
        </Group>
        {message && <Text color="red">{message}</Text>}
      </Stack>

      {/* Social Media Section */}
      <Stack style={{ flex: 0.5, alignItems: 'center' }}>
        <Group style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              color: '#FFF4B9',
              textDecoration: 'none',
            }}
          >
            Facebook
          </a>
          <FaFacebookF style={{ color: '#B8F000', fontSize: '24px' }} />
        </Group>
        <Group style={{ alignItems: 'center' }}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              color: '#FFF4B9',
              textDecoration: 'none',
            }}
          >
            Instagram
          </a>
          <FaInstagramSquare style={{ color: '#B8F000', fontSize: '24px' }} />
        </Group>
      </Stack>

      {/* Links Section */}
      <Group style={{ flex: 2, justifyContent: 'space-between' }}>
        {links.map((section, index) => (
          <Stack key={index} style={{ textAlign: 'left' }}>
            <Title
              order={4}
              style={{
                fontSize: '14px',
                color: '#B8F000',
                fontWeight: 'bold',
              }}
            >
              {section.label}
            </Title>
            <ul
              style={{
                listStyleType: 'none',
                paddingLeft: 0,
                margin: 0,
              }}
            >
              {section.sublinks.map((sublink, subIndex) => (
                <li key={subIndex}>
                  <Anchor
                    href={sublink.link}
                    style={{
                      fontSize: '12px',
                      color: '#FFF4B9',
                    }}
                  >
                    {sublink.label}
                  </Anchor>
                </li>
              ))}
            </ul>
          </Stack>
        ))}
      </Group>
    </Group>
  </footer>
);
}
