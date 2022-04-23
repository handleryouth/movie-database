import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          getAllMovies: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
          getSpecificMovieTitle: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
        },
      },
    },
  }),
  uri: '/api/graphql',
})
