import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: false,
  reducers: {
    toggleSidebar: (state) => {
      return !state
    },
  },
})

export const { toggleSidebar } = sidebarSlice.actions
