import * as express from "express";
import {Movie} from "../../../domain/models/Movie.model";
import {IMDBMovieService} from "../services/IMDBMovie.service";
import * as url from "url";
import {injectable} from "inversify";
import {MovieRepository} from "../repository/Movie.repository";

@injectable()
export class MoviesController {
	public static movies(req: express.Request, res: express.Response): void {
		MovieRepository.listAll().then(movies => res.send(movies.map(movie => movie.asApplicationModel())));
	}

	public static movie(req: express.Request, res: express.Response): void {
		MovieRepository.list().then(movies => res.send(movies.map(movie => movie.asApplicationModel())));
	}

	public static saveMovies(req: express.Request, res: express.Response): void {
		const movies = <Movie[]>req.body;
		MovieRepository.insertBulk(movies.map(movie => movie.asDatabaseModel()))
			.then(() => res.send(JSON.stringify({
				status: "SUCCES",
				message: "inserted movies"
			})));
	}

	public static deleteMovies(req: express.Request, res: express.Response): void {
		MovieRepository.deleteAll()
			.then(queryResult => res.send({status: 200, message: `removed ${queryResult.deletedCount} movies`}));
	}

	public static deleteMovie(req: express.Request, res: express.Response): void {
		MovieRepository.deleteBulk([req.params.id])
			.then(queryResult => res.send({status: 200, message: `removed ${queryResult.deletedCount} movies`}))
	}

	public static searchIMDBMovies(req: express.Request, res: express.Response): void {
		const queryString = url.parse(req.url).query;
		IMDBMovieService.movies(queryString)
			.then(imdbMovies => res.send(imdbMovies.data.Search.map(movie => movie.asApplicationModel())))
	}
}

