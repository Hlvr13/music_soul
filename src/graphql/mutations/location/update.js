import * as graphql from 'graphql';
import {LocationType, LocationInputType} from '../../types/locations';
import Location from '../../../schemas/locations';

export default{
    type: LocationType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(LocationInputType)
        }
    },
    resolve(root, params){
        return Location.findByIdAndUpdate(params.id,{$set:{...params.data}})
                .then((location)=> Location.findById(location.id).exec())
                .catch((err)=> new Error('Could not update Location Data',err))
    }
}