import * as express from "express";
import {MovieManagerDbSingleton} from "../models/db.singleton.model";
import {IMovieJSONResponse} from "../../../domain/interfaces/MovieJSONResponse.interface";
import {Movie} from "../../../domain/models/Movie.model";
import {Collection} from "mongodb";
import { IMDBMovieService } from "../repository/IMDBMovie.service";
import * as url from "url";
import { MovieFactory } from "../factories/Movie.factory";

export class MoviesController {

    public static movies(req: express.Request, res: express.Response): void {
        MoviesController.collection.find({})
            .toArray((error, movies) => res.send(movies));
    }

    public static movie(req: express.Request, res: express.Response): void {
        MoviesController.collection.findOne(req.params.id)
            .then((movies) => res.send(movies), error => res.send({status: "FAILED"}));
    }

    public static saveMovies(req: express.Request, res: express.Response): void {
        const moviesResponse = <Array<IMovieJSONResponse>>req.body;
        MoviesController.collection.insertMany(
            moviesResponse.map((movieResponse: IMovieJSONResponse) => Movie.constructFromMovieResponse(movieResponse).toJSON()),
            (err, result) => {
                console.log("inserted movie");
                res.send(JSON.stringify({
                    status: "SUCCES",
                    message: "inserted movie"
                }))
            });
    }

    public static deleteMovies(req: express.Request, res: express.Response): void {
        MoviesController.collection.deleteMany({})
            .then(queryResult => res.send({status: 200, message: `removed ${queryResult.deletedCount} movies`}))
    }

    public static deleteMovie(req: express.Request, res: express.Response): void {
        MoviesController.collection.deleteOne({ "imdbID" : req.params.id})
            .then(queryResult => res.send({status: 200, message: `removed ${queryResult.deletedCount} movies`}))
    }

    public static searchIMDBMovies(req: express.Request, res: express.Response): void {
        const queryString = url.parse(req.url).query;
        IMDBMovieService.movies(queryString)
            .then(imdbMovies => res.send(imdbMovies.data.Search.map(movie => MovieFactory.create(movie))))
    }

    private static get collection(): Collection<Movie> {
        return MovieManagerDbSingleton.db.collection('movies');
    }

}

