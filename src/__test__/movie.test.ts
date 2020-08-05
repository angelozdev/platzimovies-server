import app from '../server';
import supertest from 'supertest';

const request = supertest(app);

afterAll((done) => {
   done();
});

describe('Testing Request Movies', () => {
   it('GET /movies', (done) => {
      request
         .post('/graphql')
         .send({ query: '{ getMovies { _id, title } }' })
         .expect(200, done());
   });
});
