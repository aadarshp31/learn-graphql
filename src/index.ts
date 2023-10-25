import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// type definitions
import { typeDefs } from "./schema";

// server setup
const server = new ApolloServer({
    typeDefs,
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