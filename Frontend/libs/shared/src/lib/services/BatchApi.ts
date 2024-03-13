import { baseapi } from './api';

export const BatchApi = baseapi
  .enhanceEndpoints({ addTagTypes: ['Batches'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getBatches: builder.query({
        query: () => 'api/batch/all-batch',
        providesTags: ['Batches'],
      }),
      newBatch: builder.mutation({
        query: (newbatch) => ({
          url: 'api/batch/new-batch',
          method: 'POST',
          body: newbatch,
        }),
      }),
    }),
  });

export const { useGetBatchesQuery, useNewBatchMutation } = BatchApi;
