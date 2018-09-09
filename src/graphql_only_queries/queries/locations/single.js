import * as graphql from 'graphql';
import { LocationType } from '../../types/locations';
import Location from '../../../schemas/locations';

const querySingleLocation = {
    type: LocationType,
    args: {
        id: {
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const location = Location.findById(params.id).exec();
        return location;
    }
}

export default querySingleLocation