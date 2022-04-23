import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  scalar Date
  type TomatoesViewerQuery {
    rating: Int
    numReviews: Int
    meter: Int
  }

  type TomatoesQuery {
    viewer: TomatoesViewerQuery
    lastUpdated: Date
  }

  type AwardQuery {
    wins: Int
    nominations: Int
    text: String
  }

  type IMBDQuery {
    rating: Int
    votes: Int
    id: Int
  }

  type MovieQuery {
    _id: String
    plot: String
    genres: [String!]
    runtime: Int
    cast: [String!]
    num_mflix_comments: Int
    poster: String
    title: String
    fullplot: String
    countries: [String!]
    released: Date
    directors: [String!]
    writers: [String!]
    rated: String
    awards: AwardQuery
    lastUpdated: String
    year: Int
    imdb: IMBDQuery
    type: String
    tomatoes: TomatoesQuery
  }

  input PaginationInput {
    limit: Int!
    offset: Int!
    type: String
  }

  input MovieSearchInputType {
    title: String!
    properties: PaginationInput
  }

  type Query {
    getAllMovies(input: PaginationInput): [MovieQuery!]
    getSpecificMovieTitle(input: MovieSearchInputType): [MovieQuery!]
  }
`
