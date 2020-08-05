import express, { Application } from 'express';
import morgan from 'morgan';
import ExpressPlayground from 'graphql-playground-middleware-express';

/* Errors Handlers */
import {
   errorHandler,
   logError,
   wrapError
} from './utils/middlewares/errorHandler';

/* Graphql */
import schema from './graphql/schemas';
import { graphqlHTTP } from 'express-graphql';

const app: Application = express();

app.use(morgan('dev'));

/* Routes */
app.use(
   '/graphql',
   graphqlHTTP({
      graphiql: true,
      schema
   })
);

app.get(
   '/movies',
   ExpressPlayground({ endpoint: '/graphql' }),
   (req, res, next) => {
      console.log('HOla');
      next();
   }
);

app.get('/', (req, res, next) => {
   res.send('Works!');
   next();
});

app.get('/me', (req, res, next) => {
   res.json({
      name: 'Angelo',
      username: 'angelozdev'
   });
});

/* Error Handler */
// Graphql por defecto tiene un manejador de errores bastante bueno!
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

export default app;
