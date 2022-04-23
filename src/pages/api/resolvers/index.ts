import { movieSchema } from 'lib'
import dbConnect from 'lib/dbConnect'

export const resolvers = {
  Query: {
    getAllMovies: async (_parents: any, { input }: any) => {
      await dbConnect()
      const movies = await movieSchema
        .find({
          type: input.type ?? { $exists: true },
        })
        .limit(parseInt(input.limit))
        .skip(parseInt(input.offset))
      return movies
    },
    getSpecificMovieTitle: async (_parents: any, { input }: any) => {
      await dbConnect()
      const movies = await movieSchema
        .find({
          title: {
            $regex: input.title,
            $options: 'i',
          },
          type: input.properties.type ?? { $exists: true },
        })
        .limit(parseInt(input.properties.limit))
        .skip(parseInt(input.properties.offset))
      return movies
    },
  },
}
