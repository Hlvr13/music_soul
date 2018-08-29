import * as graphql from 'graphql';
import { InstrumentType, InstrumentInputType } from '../../types/instrument';
import Instrument from '../../../schemas/instrument';

export default{
    type: InstrumentType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(InstrumentInputType)
        }
    },
    resolve(root,params){
        return Instrument.findByIdAndUpdate(params.id,{$set:{...params.data}})
                    .then((instrument)=> Instrument.findById(instrument.id).exec())
                    .catch((err)=> new Error('Could not update Instrumenent Data',err))
    }
}