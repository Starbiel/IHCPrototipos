import { useState } from 'react'
import routes from './routes'

import './App.css'
import { Box } from '@mui/material'
import { RouterProvider } from 'react-router'
import Color from './enum/colors'

function App() {

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
