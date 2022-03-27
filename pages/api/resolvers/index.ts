import { movieSchema } from "lib";
import dbConnect from "lib/dbConnect";

export const resolvers = {
  Query: {
    getAllMovies: async (_parents: any, { limit, offset }: any) => {
      await dbConnect();
      const movies = await movieSchema
        .find({})
        .limit(parseInt(limit))
        .skip(parseInt(offset));
      return movies;
    },
    getSpecificMovies: async (_parents: any, { limit, offset, type }: any) => {
      await dbConnect();
      const movies = await movieSchema
        .find({ type: type })
        .limit(parseInt(limit))
        .skip(parseInt(offset));
      return movies;
    },
  },
};
