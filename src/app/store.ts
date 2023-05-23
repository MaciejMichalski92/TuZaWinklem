import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from './feature/counter.slice';

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

export const store = configureStore({
  reducer: reducersCombined
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;

export const wrapper = createWrapper<AppStore>(() => store, {
  debug: true
});
