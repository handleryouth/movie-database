import { gql } from '@apollo/client'

export const QUERY_GET_ALL_MOVIES_THUMBNAILS = gql`
  query getAllMovies($input: PaginationInput) {
    getAllMovies(input: $input) {
      plot
      title
      poster
      type
      directors
      fullplot
      released
      genres
      runtime
    }
  }
`

export const QUERY_GET_SPECIFIC_MOVIE_TITLE = gql`
  query getSpecificMovie($input: MovieSearchInputType) {
    getSpecificMovieTitle(input: $input) {
      plot
      title
      poster
      type
      directors
      fullplot
      released
      genres
      runtime
    }
  }
`
