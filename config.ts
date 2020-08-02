import dotenv from 'dotenv';

dotenv.config();

export const config = {
   DEV: process.env.NODE_ENV !== 'production',
   PORT: process.env.PORT || '3000',
   DB_USER: process.env.DB_USER,
   DB_PASSWORD: process.env.DB_PASSWORD,
   DB_HOST: process.env.DB_HOST,
   DB_NAME: process.env.DB_NAME
};

export default config;
