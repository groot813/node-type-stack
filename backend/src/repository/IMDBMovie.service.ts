import axios, { AxiosPromise } from "axios";

export class IMDBMovieService {
    public static readonly OMDBAPIKEY = "blabla";
    public static readonly OMDBAPI = `http://www.omdbapi.com/?apikey=${IMDBMovieService.OMDBAPIKEY}&`;

    public static movies(paramString: string): AxiosPromise<IIMDBMoviesResponse> {
        return axios.get<IIMDBMoviesResponse>(`${IMDBMovieService.OMDBAPI + paramString}`)
    }
}

export interface IIMDBMovieResponse {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface IIMDBMoviesResponse {
    Search: Array<IIMDBMovieResponse>;
}
