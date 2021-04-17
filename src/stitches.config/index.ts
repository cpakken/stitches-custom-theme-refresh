import createCss from '@stitches/react'

export const { styled, theme, global } = createCss({
  theme: {
    colors: {
      gray50: '#fafafa',
      gray100: '#f4f4f5',
      gray200: '#e4e4e7',
      gray300: '#d4d4d8',
      gray400: '#a1a1aa',
      gray500: '#71717a',
      gray600: '#52525b',
      gray700: '#3f3f46',
      gray800: '#27272a',
      gray900: '#18181b',

      primaryBg: '', //set in theme
      primaryText: '', //set in theme

      // primaryBg: '$gray800',
      // primaryText: '$gray200',
    },
  },
})
