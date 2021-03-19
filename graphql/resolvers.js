import {getMovies, getMovie,getSuggestion} from "./db";

const resolvers = {
    Query: {
        movies : (_, {rating, limit}) => getMovies(limit,rating),
        movie : (_, {id}) => getMovie(id),
        suggestions :(_, {id}) => getSuggestion(id) 
    }
};

export default resolvers;
 