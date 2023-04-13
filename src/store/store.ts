import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { MovieSlice } from './modules';

export const rootReducer = combineReducers({
  [MovieSlice.name]: MovieSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
