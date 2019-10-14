const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query { 
        info: String!
        feed: [Link!]!
    }
    type Link {
        id: ID!
        description: String!
        url: String!
    }`;

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'FullStack tutorial for GraphQL'
}]

const resolvers = {
    Query: {
        info: () => `Esto es un clon de la API Hackernews`,
        feed: () => links,
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`El servidor está levantado en http://localhost:4000`));