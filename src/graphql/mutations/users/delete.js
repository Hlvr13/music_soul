import * as graphql from 'graphql';
import { UserType, UserInputType } from '../../types/user'; 
import User from '../../../schemas/user';

export default{
    type: UserType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){{
        const deleteUser = User.findByIdAndRemove(params.id);
        if(!deleteUser) throw Error('Error at deleting user');
        return deleteUser;
    }}
}