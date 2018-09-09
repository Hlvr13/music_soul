import * as graphql from 'graphql';
import { InstrumentType } from '../../types/instrument';
import Instrument from '../../../schemas/instrument';

const querySingleInstrument = {
    type: InstrumentType,
    args: {
        id: {
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const instrument = Instrument.findById(params.id).exec();
        return instrument;
    }
}

export default querySingleInstrument;