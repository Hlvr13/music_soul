import * as graphql from 'graphql';
import { InstrumentType, InstrumentInputType } from '../../types/instrument';
import Instrument from '../../../schemas/instrument';

export default{
    type: InstrumentType,
    args:{
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(InstrumentInputType)
        }
    },
    resolve(root,params){
        const instrument = new Instrument(params.data);
        const newInstrument = instrument.save();
        if(!newInstrument) throw new Error('Error at creating instrument');
        return newInstrument;
    }
}