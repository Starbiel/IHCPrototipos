import { useState } from 'react'
import routes from './routes'

import './App.css'
import { Box } from '@mui/material'
import { RouterProvider } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <RouterProvider router={routes} />
    </Box>
  )
}

export default App
