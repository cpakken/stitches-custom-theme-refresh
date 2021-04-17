import React from 'react'
import { Box } from './components/Box'
import { global } from './stitches.config'
import { primaryTheme } from './stitches.config/primary-theme'

const reset = global({ '*': { margin: 0, boxSizing: 'border-box' } })

function App() {
  reset()

  return (
    <div className={primaryTheme}>
      <Box fullscreen css={{ backgroundColor: '$primaryBg' }}>
        <Box full center css={{ padding: 5 }}>
          <Box css={{ color: '$primaryText', fontSize: 40 }}>Stitches is awesome!</Box>
        </Box>
      </Box>
    </div>
  )
}

export default App
