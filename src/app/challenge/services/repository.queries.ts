import { gql } from 'apollo-angular';

const GET_REPOSITORIES_BY_TOPIC = ''; //gql``;

const GET_REPOSITORIES_BY_STARS = ''; //gql``;

const DEFAULT_QUERY = gql`
{
  search(type: REPOSITORY, first: 10, query: "stars:>1") {
    nodes {
      ... on Repository {
        name
        stargazerCount
        url
        description
      }
    }
  }
}
`;

export { GET_REPOSITORIES_BY_TOPIC, GET_REPOSITORIES_BY_STARS, DEFAULT_QUERY };
