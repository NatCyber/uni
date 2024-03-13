import { baseapi } from '@egst.frontend/shared';
import { ICourse } from 'libs/shared/src/lib/types/types';

export const CourseApi = baseapi
  .enhanceEndpoints({ addTagTypes: ['Courses'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getcourses: builder.query({
        query: () => 'api/course/getcourses',
        providesTags: ['Courses'],
      }),
      addCourse: builder.mutation<ICourse, ICourse>({
        query: (course) => ({
          url: 'api/course/addcourse',
          method: 'POST',
          body: course,
        }),
        invalidatesTags: ['Courses'],
      }),
      updateCourse: builder.mutation({
        query: (toupdate) => ({
          url: 'api/course/update-course',
          method: 'PUT',
          body: toupdate,
        }),
        invalidatesTags: ['Courses'],
      }),
      deleteCourse: builder.mutation({
        query: (id) => ({
          url: 'api/course/delete-course',
          method: 'DELETE',
          body: JSON.stringify(id),
        }),
        transformResponse: async (res) => {
          try {
            const json = await res.json();
            return json;
          } catch (err) {
            return { data: null, error: { message: await res.text() } };
          }
        },
      }),
    }),
  });

export const {
  useAddCourseMutation,
  useGetcoursesQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = CourseApi;
