import * as graphql from 'graphql';
import { InstrumentType } from './instrument';
import Instrument from '../../schemas/instrument';

export const UserType = new graphql.GraphQLObjectType({
    name: 'UserType',
    description: 'UsersType DB',
    fields: () => ({
        _id:{
            type: graphql.GraphQLNonNull(graphql.GraphQLID),
        },
        firstName:{
            type: graphql.GraphQLString
        },
        lastName:{
            type: graphql.GraphQLString
        },
        email:{
            type: graphql.GraphQLString
        },
        phone:{
            type: graphql.GraphQLString
        },

        password:{
            type: graphql.GraphQLString
        },
        instrument:{
            type: InstrumentType,
            resolve(user){
                const { instrument } = user;
                return Instrument.findById(instrument).exec();
            }
        },
        genre:{
            type: graphql.GraphQLString
        },
        location:{
            type: graphql.GraphQLString
        },
        photo:{
            type: graphql.GraphQLString
        },
        urlYT:{
            type: graphql.GraphQLString
        },
        urlTW:{
            type: graphql.GraphQLString
        },
        urlFB:{
            type: graphql.GraphQLString
        }
    })
})

export const UserInputType = new graphql.GraphQLInputObjectType({
    name: 'UserInputType',
    description: 'User Input Type DB',
    fields: () => ({
        firstName:{
            type: graphql.GraphQLString
        },
        lastName:{
            type: graphql.GraphQLString
        },
        email:{
            type: graphql.GraphQLString
        },
        phone:{
            type: graphql.GraphQLString
        },
        password:{
            type: graphql.GraphQLString
        },
        instrument:{
            type: graphql.GraphQLString
        },
        genre:{
            type: graphql.GraphQLString
        },
        location:{
            type: graphql.GraphQLString
        },
        photo:{
            type: graphql.GraphQLString
        },
        urlYT:{
            type: graphql.GraphQLString
        },
        urlTW:{
            type: graphql.GraphQLString
        },
        urlFB:{
            type: graphql.GraphQLString
        }
    })
})