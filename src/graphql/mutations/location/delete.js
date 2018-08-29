import * as graphql from 'graphql';
import {LocationType, LocationInputType} from '../../types/locations';
import Location from '../../../schemas/locations';

export default{
    type: LocationType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deleteLocation = Location.findByIdAndRemove(params.id);
        if(!deleteLocation) throw Error('Error at deleting Location')
        return deleteLocation;
    }
}