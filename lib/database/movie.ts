import { model, models, Schema, Types } from "mongoose";
import { AwardProps, IMBDProps, MovieProps, TomatoesProps } from "types";

export const tomatoesSchema = new Schema<TomatoesProps>({
  viewer: {
    rating: Number,
    numReviews: Number,
    meter: Number,
  },
  lastUpdated: Date,
});

export const awardsSchema = new Schema<AwardProps>({
  wins: Number,
  nominations: Number,
  text: String,
});

const IMDBSchema = new Schema<IMBDProps>({
  rating: Number,
  votes: Number,
  id: Number,
});

const movieSchema = new Schema<MovieProps>({
  _id: Types.ObjectId,
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  poster: String,
  title: String,
  fullplot: String,
  countries: [String],
  released: Date,
  directors: [String],
  writers: [String],
  rated: String,
  awards: awardsSchema,
  lastUpdated: String,
  year: Number,
  imdb: IMDBSchema,
  type: String,
  tomatoes: tomatoesSchema,
});

export default models.Movie || model("Movie", movieSchema);
