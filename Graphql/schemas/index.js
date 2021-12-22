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
        allTypeDino(offset: Int, limit: Int, diet: String): [Dino]
        allOmnivorous(offset: Int, limit: Int): [Dino]
        allHerbivorous(offset: Int, limit: Int): [Dino]
        allCarnivorous(offset: Int, limit: Int): [Dino]
    }
`
