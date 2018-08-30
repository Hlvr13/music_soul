import * as graphql from 'graphql';
import { GenreType, GenreInputType } from '../../types/genres';
import Genre from '../../../schemas/genres';

export default{
    type: GenreType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(GenreInputType)
        }
    },
    resolve(root,params){
        const genre = new Genre(params.data);
        const newGenre = genre.save();
        if(!newGenre) throw new Error('Error at creating genre');
        return newGenre;
    }
}