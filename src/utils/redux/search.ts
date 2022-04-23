import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    toggleChangeState: (state, action) => {
      return (state = action.payload)
    },
    toggleRunSearch: (state, action) => {
      action.payload(state)
      return state
    },
  },
})

export const { toggleChangeState, toggleRunSearch } = searchSlice.actions
