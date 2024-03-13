import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IOrg } from 'libs/shared/src/lib/types/types';
import { OrgApi } from './OrgApi';
import type { RootState } from 'apps/egst.frontend/src/redux/store';

interface OrganizationState {
  orgs: IOrg[];
  selectedOrg: IOrg;
}

const initialState: OrganizationState = {
  orgs: [],
  selectedOrg: {
    id: '',
    name: '',
    discription: '',
  },
};
export const Orgslice = createSlice({
  name: 'org',
  initialState,
  reducers: {
    selectOrg: (state, action: PayloadAction<string>) => {
      let res = state.orgs.find((x) => x.id === action.payload);
      state.selectedOrg = {
        ...state.selectedOrg,
        id: res?.id,
        name: res?.name,
        discription: res?.discription,
        parentId: res?.parentId,
        type: res?.type,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      OrgApi.endpoints.getAllUnits.matchFulfilled,
      (state, action) => {
        state.orgs = action.payload;
      }
    );
    // builder.addMatcher(
    //   OrgApi.endpoints.updateOrg.matchFulfilled,
    //   (state, action) => {

    //   }
    // );
  },
});

export const getUnits = (state: RootState) => {
  return state.Orgs.orgs;
};

export const getSelectedOrg = (state: RootState) => {
  return state.Orgs.selectedOrg;
};
export const { selectOrg } = Orgslice.actions;
export default Orgslice;
