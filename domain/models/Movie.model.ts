import {MovieDatabaseModel} from "../../backend/src/models/MovieDatabaseModel";

export class Movie{
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

    public static constructFromMovieResponse(movieResponse: any) {
        return new Movie(
            movieResponse.title,
            movieResponse.year,
            movieResponse.imdbID,
            movieResponse.type,
            movieResponse.poster)
    }

    public asDatabaseModel(): MovieDatabaseModel {
        return new MovieDatabaseModel(this.title, this.year,this.imdbID, this.type, this.poster);
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