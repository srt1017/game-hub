import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import theme from './theme.ts'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initalColorMode}></ColorModeScript>
      <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
    </ChakraProvider>

  </React.StrictMode>,
)
