import { gql } from "@apollo/client";

export const QUERY_GET_ALL_MOVIES_THUMBNAILS = gql`
  query getAllMovies($limit: Int, $offset: Int) {
    getAllMovies(limit: $limit, offset: $offset) {
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
`;

export const QUERY_GET_SPECIFIC_MOVIES_THUMBNAILS = gql`
  query getSpecificMovies($limit: Int, $offset: Int, $type: String) {
    getSpecificMovies(limit: $limit, offset: $offset, type: $type) {
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
`;

export const QUERY_GET_SPECIFIC_MOVIE_TITLE = gql`
  query getSpecificTitleMovies($limit: Int, $offset: Int, $title: String) {
    getSpecificMovieTitle(limit: $limit, offset: $offset, title: $title) {
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
`;
