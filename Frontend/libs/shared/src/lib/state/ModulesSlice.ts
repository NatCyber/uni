import { createSlice } from '@reduxjs/toolkit';
import { IModule } from '../types/types';
import { ModulesApi } from '../services/ModulesApi';
import type { RootState } from 'libs/shared/src/lib/store';

interface MolduesState {
  modules: IModule[];
  selectedModule: IModule;
}

const initialState: MolduesState = {
  modules: [],
  selectedModule: {
    id: '',
    name: '',
    programId: '',
  },
};

export const ModulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    selectModule: (state, action) => {
      state.selectedModule = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      ModulesApi.endpoints.newModuler.matchFulfilled,
      (state, action) => {
        state.modules.push(action.payload);
      }
    );
    builder.addMatcher(
      ModulesApi.endpoints.getModules.matchFulfilled,
      (state, action) => {
        state.modules = action.payload;
      }
    );
  },
});

export const { selectModule } = ModulesSlice.actions;

export const getSelectedModule = (state: RootState) => {
  return state.Modules.selectedModule;
};

export const getAllModules = (state: RootState) => {
  return state.Modules.modules;
};
