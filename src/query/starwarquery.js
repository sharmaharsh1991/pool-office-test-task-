import { gql } from "graphql-tag";
export const STAR_WARS_QUERY = gql`
  query Starwars {
    allFilms {
      films {
        title
      }
    }
  }
`;
