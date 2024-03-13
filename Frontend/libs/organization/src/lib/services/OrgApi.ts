import { baseapi } from '@egst.frontend/shared';

export const OrgApi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUnits: builder.query({
      query: () => 'api/org/getallorgs',
    }),
    createOrg: builder.mutation({
      query: (org) => ({
        url: 'api/org/createorg',
        method: 'POST',
        body: org,
      }),
    }),
    updateOrg: builder.mutation({
      query: (org) => ({
        url: 'api/org/update',
        method: 'PATCH',
        body: org,
      }),
    }),
  }),
});

export const {
  useGetAllUnitsQuery,
  useCreateOrgMutation,
  useUpdateOrgMutation,
} = OrgApi;
