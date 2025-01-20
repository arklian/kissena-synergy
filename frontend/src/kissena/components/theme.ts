// src/kissena/theme.ts
import { createTheme, CSSVariablesResolver, rem, MantineColorsTuple, Title } from '@mantine/core';  
//import '@kissena/theme.module.css'; 
import './theme.module.css';


const neonGreen: MantineColorsTuple = [
  '#f9ffe3',
  '#f3ffcd',
  '#B9DC81',
  '#dbff66',
  '#d1ff3a',
  '#caff21',
  '#c6ff11',
  '#b8f000',
  '#9aca00',
  '#609D37'
];

const neonOrange: MantineColorsTuple = [
  "#fff3e2",
  "#ffe5cd",
  "#fcca9e",
  "#faad6a",
  "#f7953e",
  "#f68522",
  "#F6790A",
  "#db6b05",
  "#c45e00",
  "#ab4f00"
];

const darkGreen: MantineColorsTuple = [
  '#f3f9f1',
  '#c8e0bf',
  '#badead',
  '#a8d099',
  '#8dc279',
  '#7cb964',
  '#0D1608',
  '#375421',
  '#224017',
  '#102608'
];

const lightYellow: MantineColorsTuple = [
  "#fffce5",
  "#FFF4B9",
  "#ffef9e",
  "#ffe769",
  "#ffdf3f",
  "#ffdb27",
  "#ffd81b",
  "#e3bf0e",
  "#c9aa00",
  "#ae9200"
];

export const KissenaTheme = createTheme({
  colors: {
    neonGreen,
    neonOrange,
    darkGreen,
    lightYellow,
  },
  primaryColor: "neonGreen",
  headings: {
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: rem(64), lineHeight: rem(60) },
      h2: { fontSize: rem(48), lineHeight: rem(44) },
    },
  },
  fontFamily: 'Instrument Sans, sans-serif',
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16), 
    lg: rem(20),
    xl: rem(24),
  },
  components: {
    Title: Title.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--title-fz': rem(110),
              '--title-lh': rem(109),
            },
          };
        }
        return { root: {} };
      },
    }),
  },
  other: {
    standardBorderRadius: '10px',
    navBarHeight: '140px',
  }
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-border-radius': theme.other.standardBorderRadius,
    '--mantine-navbar-height': theme.other.navBarHeight,
  },
  light: {},
  dark: {}
});
