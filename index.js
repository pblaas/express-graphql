const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

app.listen(4000, () => {
	console.log('now listening on port 4000');
})
