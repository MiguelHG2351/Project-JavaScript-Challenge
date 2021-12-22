import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import schema from 'Graphql/schemas'
import resolvers from 'Graphql/resolvers'
import PrismaLib from 'lib/prisma'

const cors = Cors()

export const config = {
    api: {
        bodyParser: false
    }
}

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: ({ req }) => {
        return {
            prisma: new PrismaLib()
        }
    },
    introspection: process.env.NODE_ENV !== 'production',
})

const server = apolloServer.start()

export default cors(async function(req, res) {
    if(req.method === 'OPTIONS') {
        res.end()
    }
    await server;
    await apolloServer.createHandler({
        path: '/api/graphql'
    })(req, res)
})
