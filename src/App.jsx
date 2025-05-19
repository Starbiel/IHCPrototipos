import { useState } from 'react'
import routes from './routes'

import './App.css'
import { Box, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router'
import Color from './enum/colors'
import theme from './theme';

function App() {

  return (
    <Box
      sx={{
        backgroundColor: Color.primary,
      }}
    >
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Box>
  )
}

export default App
