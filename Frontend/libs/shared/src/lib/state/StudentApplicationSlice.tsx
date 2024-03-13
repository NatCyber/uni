import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { StudentApplicationApi } from '../services/StudentApplicationApi';
import { StudentApplication } from '../types/types';

interface StudentApplicationState {
  applications: StudentApplication[];
  selectedApplication: StudentApplication;
}

const initialState: StudentApplicationState = {
  applications: [],
  selectedApplication: {
    id: '',
    bigObject: {},
    status: false,
    ApplicationDate: '',
  },
};
export const StudentApplicationSlice = createSlice({
  name: 'StudentApplications',
  initialState,
  reducers: {
    selectApplication: (state, action) => {
      state.selectedApplication = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      StudentApplicationApi.endpoints.getStudentApplications.matchFulfilled,
      (state, action) => {
        state.applications = action.payload;
      }
    );
  },
});

export const { selectApplication } = StudentApplicationSlice.actions;

export const getSelectedApplication = (state: RootState) => {
  return state.StudentApplications.selectedApplication;
};
