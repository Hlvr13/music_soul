import * as graphql from 'graphql';

export const GenreType = new graphql.GraphQLObjectType({
    name: 'GenreType',
    description: 'ObjectTypein GraphQL',
    fields: () => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        name: {
            type: graphql.GraphQLString
        },
        description: {
            type: graphql.GraphQLString
        }
    })
})

export const GenreInputType = new graphql.GraphQLInputObjectType({
    name: 'GenreInputType',
    description: 'GenreInputType',
    fields: () => ({
        name: {
            type: graphql.GraphQLString
        },
        description: {
            type: graphql.GraphQLString     
        }
    })
})