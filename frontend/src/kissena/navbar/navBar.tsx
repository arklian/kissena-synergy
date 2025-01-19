import {
  Affix,
  Burger,
  Center,
  Drawer,
  Group,
  Menu,
  NavLink,
  ScrollArea,
  Space,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.css';
import { ChevronDown } from 'lucide-react';
import logo from '@kissena/navbar/assets/logo.jpg';


const links = [
  {
    link: '',
    label: 'Announcements',
  },
  {
    link: '',
    label: 'Events',
    subLinks: [
      { link: '', label: 'Upcoming' },
      { link: '', label: 'Recent' },
    ],
  },
  {
    link: '',
    label: 'Learn More',
    subLinks: [
      { link: '', label: 'Our Mission' },
      { link: '/team', label: 'Meet the Team' },
    ],
  },
];

export function NavBar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => {
    if (link.subLinks) {
      return (
        <Menu
          key={link.label}
          position="bottom-start"
          trigger="click-hover"
          loop={false}
          withinPortal={false}
          trapFocus={false}
          menuItemTabIndex={0}
          transitionProps={{ exitDuration: 0 }}
        >
          <Menu.Target>
            <UnstyledButton className={classes.link}>
              <Center>
                <Text className={classes.linkLabel}>{link.label}</Text>
                <ChevronDown size="10px" stroke="1.5px" color= "#000000" />
              </Center>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {link.subLinks?.map((subLink) => (
              <Menu.Item
                component="a"
                key={subLink.label}
                href={subLink.link}
                className={classes.dropDownItem}
              >
                {subLink.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return link.link ? (
      <UnstyledButton
        component="a"
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        <Text size="xl">{link.label}</Text>
      </UnstyledButton>
    ) : (
      <span key={link.label} className={classes.link}>
        {link.label}
      </span>
    );
  });

  return (
    <>
      <Affix position={{ top: 0 }} w="100%">
        <header className={classes.header}>
          <div className={classes.inner}>
            <UnstyledButton
              component="a"
              href="/"
              
              className={classes.logoSection}
            >
              <img 
                src = {logo}
                alt="Logo" 
                className={classes.logoImage}
              />
              <div className={classes.logoText}>
                <Text
                  style={{ color: '#caff21' }}
                  size="xl"
                  fw={700}
                >
                  Kissena
                </Text>
                <Text
                  style={{ color: '#f68522' }}
                  size="xl"
                  fw={700}
                >
                  Synergy
                </Text>
              </div>
            </UnstyledButton>

            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>

            <Burger
              opened={opened}
              onClick={toggle}
              size="md"
              hiddenFrom="sm"
              color="var(--mantine-color-lightYellow-2)"
            />
          </div>

          <Drawer
            opened={opened}
            onClose={close}
            size="100%"
            padding="md"
            hiddenFrom="sm"
            position="right"
            closeButtonProps={{ size: 'xl', mr: 24 }}
          >
            <ScrollArea>
              <NavLink
                href="/"
                label={<Text size="xl">Home</Text>}
                leftSection={<Space w={10} />}
              />
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  href={link.link}
                  label={<Text size="xl">{link.label}</Text>}
                  leftSection={<Space w={10} />}
                />
              ))}
            </ScrollArea>
          </Drawer>
        </header>
      </Affix>
      <div className={classes.headerPlaceholder} />
    </>
  );
}