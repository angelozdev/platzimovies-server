import { model, Schema } from 'mongoose';

const MovieSchema = new Schema(
   {
      title: {
         type: String,
         required: true
      },
      year: {
         type: Number,
         required: true
      },
      cover: {
         type: String,
         required: true
      },
      description: {
         type: String,
         required: true
      },
      duration: {
         type: Number,
         required: true
      },
      contentRating: {
         type: String,
         required: true
      },
      source: {
         type: String,
         required: true
      },
      tags: [
         {
            type: String,
            required: true
         }
      ]
   },
   {
      timestamps: true
   }
);

export default model('Movie', MovieSchema, 'movies');
