import * as graphql from 'graphql';
import { GenreType } from '../../types/genres';
import Genre from '../../../schemas/genres';

const queryAllGenres = {
    type: new graphql.GraphQLList( GenreType ),
    resolve(){
        const genres = Genre.find().exec();
        if(!genres) throw Error('Error at fetching genres.')
        return genres;
    }
}

export default queryAllGenres;