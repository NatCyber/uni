import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { baseapi } from './services/api';
import { AuthSlice } from './state/authSlice';
import { CourseSlice } from './state/Courseslice';
import { ProgramsSlice } from './state/programs-slice';
import { CourseOfferingSlice } from './state/CourseOfferSlice';
import { BatchSlice } from './state/BatchSlice';
import { StudentApplicationSlice } from './state/StudentApplicationSlice';
import { ConcentrationsSlice } from './state/ConcentrationsSlice';
import { ModulesSlice } from './state/ModulesSlice';
import { InstructorSlice } from './state/InstructorSlice';
// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: [
//     baseapi.reducerPath,
//     Orgreducer.name,
//     ProgramsSlice.name,
//     CourseSlice.name,
//   ],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [baseapi.reducerPath]: baseapi.reducer,
    Auth: AuthSlice.reducer,
    Courses: CourseSlice.reducer,
    Programs: ProgramsSlice.reducer,
    CourseOffering: CourseOfferingSlice.reducer,
    Batches: BatchSlice.reducer,
    StudentApplications: StudentApplicationSlice.reducer,
    Concentrations: ConcentrationsSlice.reducer,
    Modules: ModulesSlice.reducer,
    Instructors: InstructorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseapi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
