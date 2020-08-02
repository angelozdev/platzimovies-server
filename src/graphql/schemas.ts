import { makeExecutableSchema } from 'graphql-tools';
import { readFileSync } from 'fs';
import { join } from 'path';
import { GraphQLSchema } from 'graphql';
import resolvers from './resolver';

const typeDefs: string = readFileSync(join(__dirname, 'typeDefs.gql'), {
   encoding: 'utf-8'
});

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
