import * as graphql from 'graphql';
import { LocationType } from '../../types/locations';
import Location from '../../../schemas/locations';

const queryAllLocations = {
    type: new graphql.GraphQLList( LocationType ),
    resolve(){
        const locations = Location.find().exec();
        if(!locations) throw Error('Error at fetching locations')
        return locations;
    }
}

export default queryAllLocations;