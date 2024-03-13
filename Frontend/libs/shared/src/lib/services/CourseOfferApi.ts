import { baseapi } from '@egst.frontend/shared';
import { CourseOffering } from 'libs/shared/src/lib/types/types';

export const CourseOfferApi = baseapi
  .enhanceEndpoints({ addTagTypes: ['Offerings', 'Batches'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getBatches: builder.query({
        query: () => 'api/batch/all-batch',
        providesTags: ['Batches'],
      }),
      newBatch: builder.mutation({
        query: (name) => ({
          url: 'api/batch/new-batch',
          method: 'POST',
          body: { Name: name },
        }),
      }),
      getOfferings: builder.query<CourseOffering[], null>({
        query: () => ({
          url: 'api/courseOffering/get-offerings',
          method: 'GET',
        }),
        providesTags: ['Offerings'],
      }),
      saveOfferings: builder.mutation({
        query: (offerings) => ({
          url: 'api/courseOffering/save-offerings',
          method: 'POST',
          body: offerings,
        }),
        invalidatesTags: ['Offerings'],
      }),
    }),
  });

export const {
  useGetOfferingsQuery,
  useSaveOfferingsMutation,
  useGetBatchesQuery,
  useNewBatchMutation,
} = CourseOfferApi;
