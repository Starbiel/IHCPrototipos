import { useState } from 'react'
import routes from './routes'

import './App.css'
import { Box } from '@mui/material'
import { RouterProvider } from 'react-router'
import Color from './enum/colors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box
      sx={{
        backgroundColor: Color.primary,
      }}
    >
      <RouterProvider router={routes} />
    </Box>
  )
}

export default App
