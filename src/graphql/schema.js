import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typeDefs'
import { userResolvers } from './user/resolvers'
import { postTypeDefs } from './post/typeDefs'
import { postResolvers } from './post/resolvers'
const rootTypeDefs = gql` 
    type Query{
        _empty: Boolean
    }`

export const schema = {
    typeDefs: [],
    resolvers: []
}


const rootResolvers = {
    Query: {
        _empty: () => true
    }
}

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs]
export const resolvers = [rootResolvers, userResolvers, postResolvers]


