import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import App from './App.tsx'
import theme from './theme.ts'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initalColorMode}></ColorModeScript>
      <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
    </ChakraProvider>

  </React.StrictMode>,
)
