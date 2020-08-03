import { IMovie } from '../../interfaces/IMovie';
import Movie from '../models/Movie';
import { Document } from 'mongoose';

class MovieService {
   async getMovies(): Promise<Document[]> {
      try {
         const movies = await Movie.find({});
         return movies;
      } catch (err) {
         return Promise.reject(err);
      }
   }

   async getMovie(id: number | string): Promise<Document | null> {
      try {
         const movie = await Movie.findById(id);
         return movie;
      } catch (err) {
         return Promise.reject(err);
      }
   }

   async createMovie(movie: IMovie): Promise<Document> {
      try {
         return await Movie.create(movie);
      } catch (err) {
         return Promise.reject(err);
      }
   }

   async updateMovie(id: string, movie: IMovie): Promise<Document | null> {
      try {
         return await Movie.findByIdAndUpdate(id, movie, { new: true });
      } catch (err) {
         return Promise.reject(err);
      }
   }
}

export default MovieService;
