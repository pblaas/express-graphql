const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';


const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

app.listen(4000, () => {
	console.log('now listening on port 4000');
})
