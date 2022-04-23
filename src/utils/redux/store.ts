import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { searchSlice } from './search'
import { sidebarSlice } from './sidebar'

export const rootReducer = combineReducers({
  search: searchSlice.reducer,
  sidebar: sidebarSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
})
