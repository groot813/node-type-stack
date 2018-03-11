import { IIMDBMovieResponse } from "../services/IMDBMovie.service";
import { Movie } from "../../../domain/models/Movie.model";

export class MovieFactory {
    public static create(imdbMovie: IIMDBMovieResponse): Movie {
        return new Movie(
            imdbMovie.Title, 
            imdbMovie.Year, 
            imdbMovie.imdbID, 
            imdbMovie.Type, 
            imdbMovie.Poster);
    }
}