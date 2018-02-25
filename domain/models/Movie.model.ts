import {IMovieJSONResponse} from "../interfaces/MovieJSONResponse.interface";

export class Movie implements IMovieJSONResponse{

    public title: string;
    public year: string;
    public imdbID: string;
    public type: string;
    public poster: string;

    constructor(title: string, year: string, imdbID: string, type: string, poster: string) {
        this.title = title;
        this.year = year;
        this.imdbID = imdbID;
        this.type = type;
        this.poster = poster;
    }

    public static constructFromMovieResponse(movieResponse: IMovieJSONResponse) {
        return new Movie(
            movieResponse.title,
            movieResponse.year,
            movieResponse.imdbID,
            movieResponse.type,
            movieResponse.poster)
    }

    toJSON() {
        return {
            title: this.title,
            year: this.year,
            imdbID: this.imdbID,
            type: this.type,
            poster: this.poster
        }
    }

}