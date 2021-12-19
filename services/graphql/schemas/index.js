import { gql } from "apollo-server-micro";

export default gql`
    type Dino {
        id: ID!
        name: String!
        weight: Int!
        height: Int!
        diet: String!
        period: String!
        image: String!
        description: String!
    }

    type Query {
        allDinos: [Dino]
    }
`
