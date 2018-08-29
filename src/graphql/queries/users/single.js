import * as graphql from 'graphql';
import { UserType } from '../../types/user';
import User from '../../../schemas/user';

const querySingleUser = {
    type: UserType,              //Se utiliza type NO types.
    args:{
        id:{
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const user = User.findById(params.id).exec();
        return user;
    }
}

export default querySingleUser;