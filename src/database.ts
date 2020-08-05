import mongoose from 'mongoose';
import { config } from './config';

const URI: string = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}.ac5xx.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`;

export default () => {
   mongoose
      .connect(URI, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useFindAndModify: false
      })
      .then(() => console.log('[DB] Connected'))
      .catch(console.error);
};
