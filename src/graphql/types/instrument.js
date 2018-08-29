import * as graphql from 'graphql';

export const InstrumentType = new graphql.GraphQLObjectType({
    name: 'InstrumentType',
    description: 'InstrumentType in GraphQL',
    fields: () => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        name: {
            type: graphql.GraphQLString
        },
        strings:{
            type: graphql.GraphQLInt
        }
    })
})

export const InstrumentInputType = new graphql.GraphQLInputObjectType({
    name: 'InstrumentInputType',
    description: 'InstrumentInputType in GraphQL',
    fields: () => ({
        name: {
            type: graphql.GraphQLString
        },
        strings:{
            type: graphql.GraphQLInt
        }
    })
})