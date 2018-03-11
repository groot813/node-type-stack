import {Collection} from "mongodb";
import {MovieManagerDbSingleton} from "../models/db.singleton.model";
import {Movie} from "../../../domain/models/Movie.model";
import {injectable} from "inversify";
import {MovieDatabaseModel} from "../models/MovieDatabaseModel";

@injectable()
export class MovieRepository{
	public static insertBulk(items: MovieDatabaseModel[]): Promise<any> {
		return MovieRepository.collection.insertMany(items);
	}

	public static deleteBulk(ids: string[]): Promise<any> {
		return MovieRepository.collection.deleteMany({ "imdbID": { "$in": ids } })
	}

	public static deleteAll(): Promise<any> {
		return MovieRepository.collection.deleteMany({})
	}

	public static list(): Promise<MovieDatabaseModel[]> {
		return MovieRepository.collection.find({}).toArray();
	}

	public static listAll(): Promise<MovieDatabaseModel[]> {
		return MovieRepository.collection.find({}).toArray();
	}

	private static get collection(): Collection<MovieDatabaseModel> {
		return MovieManagerDbSingleton.db.collection('movies');
	}
}