import { ApolloClient, InMemoryCache } from '@apollo/client';
const { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_SPACE_ID } =
  process.env;

export const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
    'Content-Type': 'application/json'
  }
});
