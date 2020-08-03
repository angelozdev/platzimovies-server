export interface IMovie {
   _id: string;
   title: string;
   year: number;
   cover: string;
   description: string;
   duration: number;
   contentRating: string;
   source: string;
   tags: Array<string>;
}
