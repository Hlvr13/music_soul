import * as graphql from 'graphql';
import { GenreType, GenreInputType } from '../../types/genres'
import Genre from '../../../schemas/genres';

export default{
    type: GenreType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deleteGenre = Genre.findByIdAndRemove(params.id);
        if(!deleteGenre) throw Error('Error at deleting Genre');
        return deleteGenre;
    }
}