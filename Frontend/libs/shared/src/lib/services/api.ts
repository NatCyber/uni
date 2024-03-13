import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseapi = createApi({
  reducerPath: 'api',
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:5000/',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: () => ({}),
});
