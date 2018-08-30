import * as graphql from 'graphql';

export const LocationType = new graphql.GraphQLObjectType({
    name: 'LocationType',
    description: 'LocationType in GraphQL',
    fields: () => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        country: {
            type: graphql.GraphQLString
        },
        state: {
            type: graphql.GraphQLString
        },
        city: {
            type: graphql.GraphQLString
        }
    })
})

export const LocationInputType = new graphql.GraphQLInputObjectType({
    name: 'LocationInputType',
    description: 'LocationInputType in GraphQL',
    fields: () => ({
        country: {
            type: graphql.GraphQLString
        },
        state: {
            type: graphql.GraphQLString
        },
        city: {
            type: graphql.GraphQLString
        }
    })
})