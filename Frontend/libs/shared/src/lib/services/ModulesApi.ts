import { baseapi } from './api';

export const ModulesApi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    getModules: builder.query({
      query: () => 'api/module/get-modules',
    }),
    newModuler: builder.mutation({
      query: (newModule) => ({
        url: 'api/module/add-module',
        method: 'POST',
        body: newModule,
      }),
    }),
  }),
});

export const { useGetModulesQuery, useNewModulerMutation } = ModulesApi;
