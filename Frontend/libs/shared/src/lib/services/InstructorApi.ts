import { json } from 'stream/consumers';
import { Instructor } from '../types/types';
import { baseapi } from './api';

export const InstructorApi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    getInstructors: builder.query({
      query: () => 'api/instructors/get-instructors',
    }),
    createInstructor: builder.mutation<Instructor, any>({
      query: (newInstructor) => ({
        url: 'api/instructors/new-instructor',
        method: 'POST',
        body: newInstructor,
      }),
    }),
    updateInstructor: builder.mutation({
      query: (toupdate) => ({
        url: 'api/instructors/update-instructor',
        method: 'PUT',
        body: toupdate,
      }),
    }),
    deleteInstructor: builder.mutation({
      query: (id) => ({
        url: 'api/instructors/delete-instructor',
        method: 'DELETE',
        body: JSON.stringify(id),
      }),
    }),
  }),
});

export const {
  useGetInstructorsQuery,
  useCreateInstructorMutation,
  useUpdateInstructorMutation,
  useDeleteInstructorMutation,
} = InstructorApi;
