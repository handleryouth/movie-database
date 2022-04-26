import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          getAllMovies: {
            keyArgs: [],
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
          getSpecificMovie: {
            keyArgs: [],
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
        },
      },
    },
  }),
  uri: '/api/graphql',
  ssrMode: true,
})
