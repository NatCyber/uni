import { baseapi } from './api';

export const ConcentrationsApi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    getConcentrations: builder.query({
      query: () => 'api/concentration/get-concentrations',
    }),
    newConcentration: builder.mutation({
      query: (concentration) => ({
        url: 'api/concentration/create-concentration',
        method: 'POST',
        body: concentration,
      }),
    }),
    updateConcentration: builder.mutation({
      query: (toupdate) => ({
        url: 'api/concentration/update-concentration',
        method: 'PUT',
        body: toupdate,
      }),
    }),
    deleteConcentration: builder.mutation({
      query: (id) => ({
        url: 'api/concentration/delete-concentration',
        method: 'DELETE',
        body: id,
      }),
    }),
  }),
});

export const {
  useGetConcentrationsQuery,
  useNewConcentrationMutation,
  useUpdateConcentrationMutation,
  useDeleteConcentrationMutation,
} = ConcentrationsApi;
