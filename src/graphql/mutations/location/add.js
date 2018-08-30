import * as graphql from 'graphql';
import { LocationType, LocationInputType } from '../../types/locations';
import Location from '../../../schemas/locations';

export default{
    type: LocationType,
    args:{
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(LocationInputType)
        }
    },
    resolve(root,params){
        const location = new Location(params.data);
        const newLocation = location.save();
        if(!newLocation) throw new Error('Error at adding location')
        return newLocation;
    }
}