import * as graphql from 'graphql';
import { GenreType } from '../../types/genres';
import Genre from '../../../schemas/genres';

const querySingleGenre = {
    type: GenreType,
    args: {
        id: {
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const genres = Genre.findById(params.id).exec();
        return genres;
    }
}

export default querySingleGenre;