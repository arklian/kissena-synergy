import React, { useState } from 'react'
import { FaFacebookF, FaInstagramSquare, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { Button, Text, Input, Title, Anchor, Group, Stack, useMantineTheme } from '@mantine/core'


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
    {
    // link: '',
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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(email.trim() === '' || !emailRegex.test(email)) {
        setMessage("Invalid email address.")
        return;
    }

    setMessage('You have been Notified')
    setEmail('')
    
}



return (
  <footer
    style={{
      
      width: 1156,
      

      padding: ' 25px',
      backgroundColor: '#0D1608',
      
    }}
  >
    <Group align="flex-start" grow>
      {/* Newsletter Section */}
      <Stack style={{ flex: 1 }}>
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
              backgroundColor: 'transparent',
              color: '#0D1608',
              borderBottom: '1px solid #88F000',
              padding: '8px 12px',
              outline: 'none',
              
            }}
          />
          <Button
            onClick={handleNotify}
            style={{
              height: 45,
              width: 110,
              backgroundColor: '#375421',
              color: '#B8F000',
             // padding: '0px 10px',
              borderRadius: '8px',
              fontWeight: 600,
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '16x',
              transition: '0.3s ease-in-out',
            }}
          >
            Notify Me!
          </Button>
        </Group>
        {message && <Text color="red">{message}</Text>}
      </Stack>

     {/* Social Media Section */}
<Stack style={{ flex: 0.2, alignItems: 'center', padding:'20px' }}>
  <Group style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    <a
      href="https://www.facebook.com/kissenasynergy/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 600,
        fontSize: '16px',
        color: '#FFF4B9',
        textDecoration: 'none',
        textAlign: 'left',
      }}
    >
      Facebook
    </a>
    <FaFacebookSquare style={{ color: '#B8F000', fontSize: '30px' }} />
  </Group>
  <Group style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    <a
      href="https://www.instagram.com"
      rel="noopener noreferrer"
      style={{
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 600,
        fontSize: '16px',
        color: '#FFF4B9',
        textDecoration: 'none',
        textAlign: 'left',
      }}
    >
      Instagram
    </a>
    <FaInstagramSquare style={{ color: '#B8F000', fontSize: '30px' }} />
  </Group>
</Stack>

      {/* Links Section */}
      <Group style={{ flex: 2,
        alignItems: 'flex-start'
      }}>
        {links.map((section, index) => (
          <Stack key={index} style={{ textAlign: 'left' }}>
            <Title
              order={4}
              style={{
                fontSize: '20px',
                color: '#B8F000',
                fontWeight: 'bold',
                textDecoration: 'underline',
                  margin: '-5px',
              }}
            >
              {section.label}
            </Title>
            <ul
              style={{
                padding: 0,
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
                     
                      fontSize: '15px',
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
