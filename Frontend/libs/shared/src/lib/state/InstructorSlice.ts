import { createSlice } from '@reduxjs/toolkit';
import { InstructorApi } from '../services/InstructorApi';
import { RootState } from '../store';
import { Instructor } from '../types/types';

interface InstructorState {
  instructors: Instructor[];
  selectedInstructor: Instructor;
}

const initialState: InstructorState = {
  instructors: [],
  selectedInstructor: {
    id: '',
    firstName: '',
    lastName: '',
    personalTitle: '',
    sex: '',
    qualification: '',
    Position: '',
    photo: '',
    denomination: '',
    mobile: '',
    email: '',
    isActive: false,
    type: '',
  },
};

export const InstructorSlice = createSlice({
  name: 'instructorSlice',
  initialState: initialState,
  reducers: {
    selectInstructor: (state, action) => {
      state.selectedInstructor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      InstructorApi.endpoints.getInstructors.matchFulfilled,
      (state, action) => {
        state.instructors = action.payload;
      }
    );
  },
});

export const { selectInstructor } = InstructorSlice.actions;

export const getSelectedInstructor = (state: RootState) => {
  return state.Instructors.selectedInstructor;
};
export const getAllInstructors = (state: RootState) => {
  return state.Instructors.instructors;
};
