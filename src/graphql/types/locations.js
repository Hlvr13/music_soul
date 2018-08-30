import * as graphql from 'graphql';

export const LocationType = new graphql.GraphQLObjectType({
    name: 'LocationType',
    description: 'LocationType in GraphQL',
    fields: () => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        Country: {
            type: graphql.GraphQlString
        },
        State: {
            type: graphql.GraphQlString
        },
        City: {
            type: graphql.GraphQlString
        }
    })
})

export const LocationInputType = new graphql.GraphQLInputObjectType({
    name: 'LocationInputType',
    description: 'LocationInputType in GraphQL',
    fields: () => ({
        Country: {
            type: graphql.GraphQLString
        },
        State: {
            type: graphql.GraphQLString
        },
        City: {
            type: graphql.GraphQLString
        }
    })
})