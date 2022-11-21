import { gql } from 'apollo-angular';

const GET_REPOSITORIES_BY_TOPIC = gql`
  query GetRepositoriesByTopic($topic: String!) {
    topic(name: $topic) {
      repositories(first: 10, orderBy: {field: STARGAZERS, direction: DESC}) {
        nodes {
          name
          stargazerCount
          url
          description
        }
      }
    } 
  }
`;

/**
 * This is a query related with the best rate of stars
 */
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

export { GET_REPOSITORIES_BY_TOPIC, DEFAULT_QUERY };
