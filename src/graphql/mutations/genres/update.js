import * as graphql from 'graphql';
import { GenreType, GenreInputType } from '../../types/genres'
import Genre from '../../../schemas/genres';

export default{
    type: GenreType,
    args:{
        id:{
        name: 'ID',
        type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(GenreInputType)
        }
    },
    resolve(root,params){
        return Genre.findByIdAndUpdate(params.id,{$set:{...params.data}})
                .then((genre)=> Genre.findById(genre.id).exec())
                .catch((err)=> new Error('Could not update Genre Data', err))
    }
}
