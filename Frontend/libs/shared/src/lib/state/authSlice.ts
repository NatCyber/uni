import { createSlice } from '@reduxjs/toolkit';
import { IUser, signupBody } from 'libs/shared/src/lib/types/types';
// import { authApiSlice } from '../services/authApi';
import { RootState } from 'libs/shared/src/lib/store';
import { authApiSlice } from '../services/authApi';

interface AuthState {
  registeringUser: signupBody;
  registrationStatus: { msg: string };
  user: IUser;
}

const initialState: AuthState = {
  registeringUser: {
    fullName: '',
    email: '',
    password: '',
  },
  registrationStatus: { msg: 'null' },
  user: { email: '', fullName: '', token: '', role: '', id: '' },
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.signup.matchFulfilled,
      (state, action) => {
        state.registrationStatus = { msg: 'success' };
      }
    );
    builder.addMatcher(
      authApiSlice.endpoints.signup.matchRejected,
      (state, action) => {
        state.registrationStatus = { msg: 'failed' };
      }
    );
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        if (action.payload != undefined) {
          state.user = action.payload;
          localStorage.setItem('user', JSON.stringify(action.payload));
        }
      }
    );
  },
});

export const getRegstrationStatus = (state: RootState) => {
  return state.Auth.registrationStatus.msg;
};

export const getUser = (state: RootState) => {
  return state.Auth.user;
};
