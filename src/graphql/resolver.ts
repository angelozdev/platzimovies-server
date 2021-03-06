import MovieService from '../services/movies';
import { IMovie } from '../../interfaces/IMovie';
import { Document } from 'mongoose';

const movieService = new MovieService();

export default {
   Query: {
      getMovies: async (): Promise<Document[]> => {
         /* throw new Error('Testing Errors'); */
         return await movieService.getMovies();
      },

      getMovie: async (_: void, { _id }: IMovie): Promise<Document | null> => {
         return await movieService.getMovie(_id);
      }
   },

   Mutation: {
      createMovie: async (
         _: void,
         { movie }: { movie: IMovie }
      ): Promise<Document> => {
         return await movieService.createMovie(movie);
      },

      updateMovie: async (
         _: void,
         { movie, id }: { movie: IMovie; id: string }
      ) => {
         return await movieService.updateMovie(id, movie);
      },

      deleteMovie: async (
         _: void,
         { id }: { id: string }
      ): Promise<Document | null | undefined> => {
         return await movieService.deleteMovie(id);
      }
   },

   ContentRating: {
      PG: 'PG',
      R: 'R',
      PG13: 'PG-13',
      G: 'G',
      NC17: 'NC-17'
   }
};
