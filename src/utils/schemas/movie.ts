import { object, string, number, array } from 'yup';

const titleSchema = string().max(80);
const yearSchema = number().min(1888).max(2077);
const coverSchema = string().url();
const descriptionSchema = string().max(300).min(5);
const durationSchema = number().min(1).max(300);
const contentRatingSchema = string().max(5).min(0);
const sourceSchema = string().url();
const tagsSchema = array().of(string().min(2).max(30));

export const createMovieSchema = object().shape({
   title: titleSchema.required(),
   year: yearSchema.required(),
   cover: coverSchema.required(),
   description: descriptionSchema.required(),
   duration: durationSchema.required(),
   contentRating: contentRatingSchema.required(),
   source: sourceSchema.required(),
   tags: tagsSchema
});

export const updateMovieSchema = object().shape({
   title: titleSchema,
   year: yearSchema,
   cover: coverSchema,
   description: descriptionSchema,
   duration: durationSchema,
   contentRating: contentRatingSchema,
   source: sourceSchema,
   tags: tagsSchema
});

export const idSchema = object().shape({
   _id: string().matches(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
});
