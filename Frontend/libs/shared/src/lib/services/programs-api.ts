import { baseapi } from './api';

export const ProgramsApi = baseapi
  .enhanceEndpoints({ addTagTypes: ['Programs'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllPrograms: builder.query({
        query: () => 'api/programs/all-programs',
        providesTags: ['Programs'],
      }),
      newProgram: builder.mutation({
        query: (newProg) => ({
          url: 'api/programs/new-program',
          method: 'POST',
          body: newProg,
        }),
        invalidatesTags: ['Programs'],
      }),
 
      updateProgram: builder.mutation({
        query: (toUpdate) => ({
          url: 'api/programs/update-program',
          method: 'PUT',
          body: toUpdate,
        }),
        invalidatesTags: ['Programs'],
      }),
    }),
  });

export const {
  useGetAllProgramsQuery,
  useNewProgramMutation,
  useUpdateProgramMutation,
} = ProgramsApi;
