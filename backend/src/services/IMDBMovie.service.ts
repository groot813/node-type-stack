import axios, { AxiosPromise } from "axios";
import {Movie} from "../../../domain/models/Movie.model";

export class IMDBMovieService {
    public static readonly OMDBAPIKEY = "e36ea2a2";
    public static readonly OMDBAPI = `http://www.omdbapi.com/?apikey=${IMDBMovieService.OMDBAPIKEY}&`;

    public static movies(paramString: string): AxiosPromise<IIMDBMoviesResponse> {
        return axios.get<IIMDBMoviesResponse>(`${IMDBMovieService.OMDBAPI + paramString}`)
    }
}

export class IIMDBMovieResponse {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;

	public asApplicationModel() {
		return new Movie(this.Title, this.Year, this.imdbID, this.Type, this.Poster);
	}
}

export interface IIMDBMoviesResponse {
    Search: Array<IIMDBMovieResponse>;
}