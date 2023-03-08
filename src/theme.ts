import { MantineThemeOverride } from '@mantine/styles/lib/theme/types'
import { MantineTheme } from '@mantine/core'

const dark: MantineTheme['colors']['dark'] = [
  '#494E54',
  '#424242',
  '#313131',
  '#282828',
  '#282828',
  '#262626',
  '#232323',
  '#1e1e1e',
  '#1c1c1c',
  '#191919'
]

export const theme: MantineThemeOverride = {
  headings: {
    fontFamily: '"Quicksand", sans-serif'
  },
  components: {
    Title: {
      styles: (theme) => ({
        root: {
          color: theme.colors[ theme.primaryColor ][ 5 ]
        }
      })
    },
    Accordion: {
      styles: () => ({
        item: {
          backgroundColor: '#fff',
          '&[data-active]': {
            backgroundColor: '#fff'
          }
        },
        control: {
          backgroundColor: '#fff',
          '&:hover': {
            backgroundColor: '#fff'
          }
        }
      })
    }
  },
  black: dark[ 0 ],
  colors: {
    dark,
    brand: [
      '#363c48', // block bg
      '#363c48',
      '#363c48',
      '#363c48', // header
      '#363c48', // progress
      '#2e333f',
      '#363c48', // main
      '#363c48',
      '#363c48',
      '#363c48'
    ]
  },
  primaryColor: 'brand'
}

export enum ColorType {
  Bg     = 0,
  Header = 3,
  Main   = 6,
}

export const getPrimaryColor = (t: MantineTheme,
                                colorType: ColorType = ColorType.Main) => t.colors[ t.primaryColor ][ colorType ]