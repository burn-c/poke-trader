/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { TradeProvider } from '../context/trade'
import { Header } from '../components'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <TradeProvider>
        <Flex
          as="section"
          w="100%"
          maxW={1480}
          mx="auto"
          align="center"
          direction="column"
        >
          <Component {...pageProps} />
        </Flex>
      </TradeProvider>
    </ChakraProvider>
  )
}

export default MyApp
