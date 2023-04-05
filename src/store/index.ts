import type { ThunkAction } from '@reduxjs/toolkit';
import type { Action } from 'redux';
import type { rootReducer } from './store';
import store from './store';

const makeStore: any = () => store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type AppDispatch = typeof store.dispatch;

export default store;
