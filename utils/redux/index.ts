import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { searchSlice } from "./search";

export const rootReducer = combineReducers({
  search: searchSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
