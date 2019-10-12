const { GraphQLServer } = require('graphql-yoga');

// 1
const typeDefs = `type Query { info: String!}`;

// 2 
const resolvers = {
    Query: {
        info: () => `Esto es un clon de la API Hackernews`
    }
};

// 3
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`El servidor está levantado en http://localhost:4000`));