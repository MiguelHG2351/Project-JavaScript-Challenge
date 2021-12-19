import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import schema from 'services/graphql/schemas'
import resolvers from 'services/graphql/resolvers'

const cors = Cors()

export const config = {
    api: {
        bodyParser: false
    }
}

const apolloServer = new ApolloServer({
    schema,
    resolvers
})

const server = apolloServer.start()

export default cors(function(req, res) {
    
})

