import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@fontsource/inter";
import "styles/globals.css";
import { Provider } from "react-redux";

import { Layout } from "components";
import { store } from "utils";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false,
      typePolicies: {
        Query: {
          fields: {
            getAllMovies: {
              keyArgs: false,
              merge(existing = [], incoming) {
                return [...existing, ...incoming];
              },
            },
          },
        },
      },
    }),
    uri: "/api/graphql",
  });

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
  );
}

export default MyApp;
