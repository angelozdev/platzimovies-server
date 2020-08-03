import MovieService from '../services/movies';
import { IMovie } from '../../interfaces/IMovie';
import { Document } from 'mongoose';

const movieService = new MovieService();

export default {
   Query: {
      getMovies: async (): Promise<Document[]> => {
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
