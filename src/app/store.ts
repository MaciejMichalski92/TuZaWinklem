import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import counterReducer from '../app/feature/counter.slice';

const reducersCombined = {
  counter: counterReducer
};

export const setupStore = (
  preloadedState?: PreloadedState<RootState>
) =>
  configureStore({
    reducer: reducersCombined,
    preloadedState
  });

export const store = configureStore({ reducer: reducersCombined });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
