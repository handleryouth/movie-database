import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '@fontsource/inter'
import 'styles/globals.css'
import { Provider } from 'react-redux'

import { Layout } from 'components'
import { client, store } from 'utils'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
