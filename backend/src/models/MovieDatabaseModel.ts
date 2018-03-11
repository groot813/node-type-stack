import {Movie} from "../../../domain/models/Movie.model";

export class MovieDatabaseModel {
	private _title: string;
	private _year: string;
	private _imdbID: string;
	private _type: string;
	private _poster: string;

	constructor(title: string, year: string, imdbID: string, type: string, poster: string) {
		this._title = title;
		this._year = year;
		this._imdbID = imdbID;
		this._type = type;
		this._poster = poster;
	}

	public asApplicationModel() {
		return new Movie(this.title, this.year, this.imdbID, this.type, this.poster);
	}

	get title(): string {
		return this._title;
	}

	get year(): string {
		return this._year;
	}

	get imdbID(): string {
		return this._imdbID;
	}

	get type(): string {
		return this._type;
	}

	get poster(): string {
		return this._poster;
	}
}