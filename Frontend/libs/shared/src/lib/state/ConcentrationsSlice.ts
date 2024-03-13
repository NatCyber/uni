import { createSlice } from '@reduxjs/toolkit';
import { Concetration } from '../types/types';
import { ConcentrationsApi } from '../services/ConcentrationsApi';
import type { RootState } from 'libs/shared/src/lib/store';

interface ConcentrationState {
  concentrations: Concetration[];
  selectedConcetration: Concetration;
}

const initialState: ConcentrationState = {
  concentrations: [],
  selectedConcetration: {
    id: '',
    name: '',
    programId: '',
  },
};

export const ConcentrationsSlice = createSlice({
  name: 'concentrations',
  initialState,
  reducers: {
    selectConcetration: (state, action) => {
      state.selectedConcetration = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      ConcentrationsApi.endpoints.getConcentrations.matchFulfilled,
      (state, action) => {
        state.concentrations = action.payload;
      }
    );
    builder.addMatcher(
      ConcentrationsApi.endpoints.newConcentration.matchFulfilled,
      (state, action) => {
        state.concentrations.push(action.payload);
      }
    );
  },
});

export const { selectConcetration } = ConcentrationsSlice.actions;

export const getConcentrations = (state: RootState) => {
  return state.Concentrations.concentrations;
};

export const getSelectedConcentration = (state: RootState) => {
  return state.Concentrations.selectedConcetration;
};
