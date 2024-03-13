import { createSlice } from '@reduxjs/toolkit';
import { IProgram } from 'libs/shared/src/lib/types/types';
import type { RootState } from 'libs/shared/src/lib/store';
import { ProgramsApi } from '../services/programs-api';

interface ProgramsState {
  programs: IProgram[];
  selectedProgram: IProgram;
}

const initialState: ProgramsState = {
  programs: [],
  selectedProgram: {
    name: '',
    code: '',
    description: '',
    id: '',
  },
};

export const ProgramsSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {
    selectProgram: (state, action) => {
      state.selectedProgram = action.payload;
    },
    resetProgram: (state, action) => {
      state.selectedProgram = initialState.selectedProgram;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      ProgramsApi.endpoints.getAllPrograms.matchFulfilled,
      (state, action) => {
        state.programs = action.payload;
      }
    );
    builder.addMatcher(
      ProgramsApi.endpoints.newProgram.matchFulfilled,
      (state, action) => {
        state.programs.push(action.payload);
      }
    ),
      builder.addMatcher(
        ProgramsApi.endpoints.updateProgram.matchFulfilled,
        (state, action) => {
          const prog = state.programs.find((p, i) => {
            if (p.id == action.payload.id) {
              state.programs.splice(i, 1, action.payload);
            }
          });
        }
      );
  },
});

export const { selectProgram, resetProgram } = ProgramsSlice.actions;

export const getSelectedProgram = (state: RootState) => {
  return state.Programs.selectedProgram;
};

export const getAllPrograms = (state: RootState) => {
  return state.Programs.programs;
};
