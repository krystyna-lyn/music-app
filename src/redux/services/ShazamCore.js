import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',

    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '5aab71f9bamshb17af176724fb1cp10ba09jsn3610ac4ca93b')
      return headers
    },
  }),
  endpoints: (builder)=>({
    getTopCharts:  builder.query({query: ()=> '/charts/track'})
  })
})

export const {
  useGetTopChartsQuery,
} =  shazamCoreApi;

// Used to make the API call and retrieve data from it. This hook will automatically dispatch
// actions based on the response of the API call.
// The action types that are generated correspond to the endpoint name
