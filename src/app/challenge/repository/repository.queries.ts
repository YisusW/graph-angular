import { gql } from 'apollo-angular';

const GET_REPOSITORIES_BY_TOPIC = ''; //gql``;

const GET_REPOSITORIES_BY_STARS = ''; //gql``;

const DEFAULT_QUERY = gql`
  {
    topic(name: "music") {
      repositories(first: 10, orderBy: { field: STARGAZERS, direction: DESC }) {
        nodes {
          name
          description
          stargazerCount
        }
      }
    }
  }
`;

export { GET_REPOSITORIES_BY_TOPIC, GET_REPOSITORIES_BY_STARS, DEFAULT_QUERY };
