import users from './users';
import instruments from './instruments';
import locations from './locations';
import genres from './genres';

export default {
    ...users,
    ...instruments,
    ...locations,
    ...genres
}