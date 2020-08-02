import express, { Application } from 'express';
import morgan from 'morgan';

/* Graphql */
import schema from './graphql/schemas';
import { graphqlHTTP } from 'express-graphql';

const app: Application = express();

app.use(morgan('dev'));
app.use(
   '/graphql',
   graphqlHTTP({
      graphiql: true,
      schema
   })
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

export default app;
