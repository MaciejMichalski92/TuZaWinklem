import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_SPACE_ID } =
  process.env;

// todo change this demo!
export const contentfulApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query {headingCollection{items{sys{id},text,type,isBold}}}`
    })
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({})
});
