import * as graphql from 'graphql';
import { UserType, UserInputType } from '../../types/user';
import User from '../../../schemas/user';

export default{
    type: UserType,
    args:{
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        const user = new User(params.data);
        const newUser = user.save();
        if(!newUser) throw new Error('Error at creating new user.');
        return newUser;
    }
}