import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GradeType, ICourse } from 'libs/shared/src/lib/types/types';
import { CourseApi } from '../services/CourseApi';
import type { RootState } from 'libs/shared/src/lib/store';

interface CoursesState {
  courses: ICourse[];
  selectedCourse: ICourse;
}

const initialState: CoursesState = {
  courses: [],
  selectedCourse: {
    id: '',
    name: '',
    description: '',
    credit: 0,
    code: '',
    gradeType: GradeType.NonCredit,
    moduleId: '',
  },
};

export const CourseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    selectCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    removeCourse: (state, action) => {
      for (var i = state.courses.length - 1; i >= 0; i--) {
        if (state.courses[i].id == action.payload) {
          state.courses.splice(i, 1);
          break;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      CourseApi.endpoints.getcourses.matchFulfilled,
      (state, action) => {
        state.courses = action.payload;
      }
    );
  },
});

export const getAllCourses = (state: RootState) => {
  return state.Courses.courses;
};
export const { selectCourse, removeCourse } = CourseSlice.actions;

export const getSelectedCourse = (state: RootState) => {
  return state.Courses.selectedCourse;
};

export default CourseSlice;
