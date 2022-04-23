import { ObjectId } from 'mongoose'

export interface TomatoesProps {
  viewer: {
    rating: number
    numReviews: number
    meter: number
  }
  lastUpdated: Date
}

export interface AwardProps {
  wins: number
  nominations: number
  text: string
}

export interface IMBDProps {
  rating: number
  votes: number
  id: number
}

export interface MovieProps {
  _id: ObjectId
  plot: string
  genres: string[]
  runtime: number
  cast: string[]
  num_mflix_comments: number
  poster: string
  title: string
  fullplot: string
  countries: string[]
  released: Date
  directors: string[]
  rated: string
  awards: AwardProps
  lastUpdated: string
  writers: string[]
  year: number
  imdb: AwardProps
  type: string
  tomatoes: TomatoesProps
}
