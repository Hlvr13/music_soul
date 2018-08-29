import * as graphql from 'graphql';
import { UserType } from '../../types/user';
import User from '../../../schemas/user';

const queryAllUsers = {
    type: new graphql.GraphQLList( UserType ),
    resolve(){
        const users = User.find().exec();
        if(!users) throw Error('Error at fetching users.');
        return users;
    }
}

export default queryAllUsers;