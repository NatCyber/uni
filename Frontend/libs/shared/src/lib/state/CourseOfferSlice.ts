import { createSlice } from '@reduxjs/toolkit';
import { CourseOffering } from 'libs/shared/src/lib/types/types';
import type { RootState } from 'libs/shared/src/lib/store';

interface CourseOfferingState {
  courseOfferings: CourseOffering[];
}

const initialState: CourseOfferingState = {
  courseOfferings: [],
};

export const CourseOfferingSlice = createSlice({
  name: 'courseOffering',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const allCourseOffering = (state: RootState) => {
  return state;
};


export default CourseOfferingSlice;
