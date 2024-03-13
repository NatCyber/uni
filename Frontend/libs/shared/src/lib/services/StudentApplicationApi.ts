import { baseapi } from './api';

export const StudentApplicationApi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation({
      query: (Application) => ({
        url: 'api/students/CreateApplication',
        method: 'POST',
        body: { BigObject: JSON.stringify(Application) },
      }),
    }),
    getStudentApplications: builder.query({
      query: () => ({
        url: 'api/students/getApplications',
      }),
      transformResponse: (response: []) => {
        if (response.length == 0) return [];
        response.forEach((e) => (e.bigObject = JSON.parse(e.bigObject)));
        return response;
      },
    }),
    changeApplicationStatus: builder.mutation({
      query: (ApproveDto) => ({
        url: 'api/students/approve',
        method: 'POST',
        body: ApproveDto
      })
    })
  }),
});

export const { useCreateApplicationMutation, useGetStudentApplicationsQuery, useChangeApplicationStatusMutation } =
  StudentApplicationApi;
