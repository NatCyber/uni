import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { Batch } from 'libs/shared/src/lib/types/types';
import { BatchApi } from '../services/BatchApi';
import type { RootState } from 'libs/shared/src/lib/store';

interface BatchInitialState {
  batches: Batch[];
  selectedBatch: Batch;
}

const initialState: BatchInitialState = {
  batches: [],
  selectedBatch: {
    id: '',
    name: '',
    academicYear: 0,
    programId: '',
  },
};

export const BatchSlice = createSlice({
  name: 'batchSlice',
  initialState: initialState,
  reducers: {
    selectBatch: (state, action) => {
      state.selectedBatch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      BatchApi.endpoints.getBatches.matchFulfilled,
      (state, action) => {
        state.batches = action.payload;
      }
    );
    builder.addMatcher(
      BatchApi.endpoints.newBatch.matchFulfilled,
      (state, action) => {
        state.batches.push(action.payload);
      }
    );
  },
});

export const { selectBatch } = BatchSlice.actions;

export const selectAllBatches = createSelector(
  (state: RootState) => state.Batches.batches,
  (batches) => batches
);

export const getAllBatches = (state: RootState) => {
  return state.Batches.batches;
};

export const getSelectedBatch = (state: RootState) => {
  return state.Batches.selectedBatch;
};
