import { gql } from "apollo-server-express";
// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
    type Quote {
        id: ID!
        phrase: String!
        quotee: String
    }

    type Mutation {
        addQuote(phrase: String!, quotee: String): Quote
        editQuote(id: ID!, phrase: String, quotee: String): Quote
        deleteQuote(id: ID!): DeleteResponse
    }

    type DeleteResponse {
        ok: Boolean!
    }

    type Query {
        quotes: [Quote]
    }
`;
