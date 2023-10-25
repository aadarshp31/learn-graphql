import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// server setup
const server = new ApolloServer({
    typeDefs: `
        type Query {
            hello: String
        }
    `,
    resolvers: {
        Query: {
            hello: () => 'world'
        }
    }
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀 Server ready at ${url}`);