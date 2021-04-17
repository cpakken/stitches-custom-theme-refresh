import React from 'react'
import { styled } from '../stitches.config'

export const Box = styled('div', {
  variants: {
    full: {
      true: {
        width: '100%',
        height: '100%',
      },
    },
    fullscreen: {
      true: {
        width: '100vw',
        height: '100vh',
      },
    },
    center: {
      true: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
})
