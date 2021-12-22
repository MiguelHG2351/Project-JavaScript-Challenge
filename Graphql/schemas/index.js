import { gql } from "apollo-server-micro";

export default gql`
    type Dino {
        id: ID!
        name: String!
        description: String!
        image: String!
        diet: String!
        live: String!
        found: String!
        type: String!
        length: String!
    }

    type Query {
        allDinos(offset: Int, limit: Int): [Dino]
    }
`
