import { createSlice } from '@reduxjs/toolkit'

import { MovieProps } from 'types'

const movieSliceInitialState: MovieProps[] = []

export const movieSlice = createSlice({
  name: 'movie',
  initialState: movieSliceInitialState,
  reducers: {
    addMovie: (state, action) => {
      return [...state, action.payload]
    },
  },
})

export const { addMovie } = movieSlice.actions
