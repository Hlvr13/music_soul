import * as graphql from 'graphql';
import { InstrumentType, InstrumentInputType } from '../../types/instrument';
import Instrument from '../../../schemas/instrument';

export default{
    type: InstrumentType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deleteInstrument = Instrument.findByIdAndRemove(params.id);
        if(!deleteInstrument) throw Error('Error at deleting Instrument');
        return deleteInstrument;
    }
}