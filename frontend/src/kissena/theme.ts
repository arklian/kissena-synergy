import {
  createTheme,
  CSSVariablesResolver,
  rem,
  MantineColorsTuple,
  Title,
} from '@mantine/core'

/**
 * Defines the shades for the primary green
 * Base Color: Index 6
 * Tint: Index 9
 */
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
  '#609D37',
]

/**
 * Defines the shades for the secondary orange
 * Base Color: Index 6
 */
const neonOrange: MantineColorsTuple = [
  '#fff3e2',
  '#ffe5cd',
  '#fcca9e',
  '#faad6a',
  '#f7953e',
  '#f68522',
  '#F6790A',
  '#db6b05',
  '#c45e00',
  '#ab4f00',
]

/**
 * Defines the shades for the background green
 * Base Color: Index 6
 * Light Color: Index 4
 */
const darkGreen: MantineColorsTuple = [
  '#f3f9f1',
  '#c8e0bf',
  '#badead',
  '#a8d099',
  '#375421',
  '#213814',
  '#0D1608',
  '#080f04',
  '#050a02',
  '#030800',
]

/**

 * Defines the shades for the background green
 * Base Color: Index 1
 */
const lightYellow: MantineColorsTuple = [
  '#fffce5',
  '#FFF4B9',
  '#ffef9e',
  '#ffe769',
  '#ffdf3f',
  '#ffdb27',
  '#ffd81b',
  '#e3bf0e',
  '#c9aa00',
  '#ae9200',
]

/**
 * Defines the theming for Mantine & text scaling based off
 * viewport size breakpoints
 *
 * ---
 * Colors
 * ---
 *
 * Neon Green (Primary)
 * Neon Orange (Secondary)
 * Dark Green (Background)
 * Light Yellow (Body text & Highlights)
 *
 * ---
 * Font Styling
 * ---
 * Heading Font: Inter
 * Weights: Regular (400), Bold (700)
 *
 * Text Font: Instrument Sans
 * Weights: Regular (400), Bold (700)
 *
 * ---
 * Other
 * ---
 * standardBorderRadius - The border radius to be
 *  used across cards, etc.
 */
export const KissenaTheme = createTheme({
  colors: {
    neonGreen,
    neonOrange,
    darkGreen,
    lightYellow,
  },
  primaryColor: 'neonGreen',
  headings: {
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif',

    sizes: {
      h1: {
        fontSize: rem(64),
        lineHeight: rem(60),
      },
      h2: {
        fontSize: rem(32),
        lineHeight: rem(30),
      },
    },
  },
  fontFamily: 'Instrument Sans, sans-serif',
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16), // Body text size
    lg: rem(20),
    xl: rem(24),
  },

  components: {
    // Add 'xxl' sizing to Title for hero text
    Title: Title.extend({
      // @ts-expect-error Manine requires us to define a theme variable for the function, but we won't use it here
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--title-fz': rem(110),
              '--title-lh': rem(109),
            },
          }
        }
        return { root: {} }
      },
    }),
  },

  other: {
    standardBorderRadius: '10px',
    navBarHeight: '70px',
  },
})

export const KissenaCSSResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-border-radius': theme.other.standardBorderRadius as string,
    '--mantine-navbar-height': theme.other.navBarHeight as string,
  },
  light: {},
  dark: {},
})
