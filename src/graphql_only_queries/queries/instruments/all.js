import * as graphql from 'graphql';
import { InstrumentType } from '../../types/instrument';
import Instrument from '../../../schemas/instrument';

const queryAllInstruments = {
    type: new graphql.GraphQLList( InstrumentType ),
    resolve(){
        const instruments = Instrument.find().exec();
        if(!instruments) throw Error('Error at fetching instruments.')
        return instruments;
    }
}

export default queryAllInstruments;