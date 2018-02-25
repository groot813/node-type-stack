import {Express} from "express";
import {MoviesController} from "../controllers/MoviesController";

export function movieManagerAppAddRoutes(movieManagerApp: Express): Express {
    movieManagerApp.get('/', (req, res) => res.sendFile('./../src/index.html', { root: __dirname }));
    movieManagerApp.get('/api/movies/search', MoviesController.searchIMDBMovies);
    movieManagerApp.get('/api/movies', MoviesController.movies);
    movieManagerApp.post('/api/movies', MoviesController.saveMovies);
    movieManagerApp.delete('/api/movies', MoviesController.deleteMovies);
    movieManagerApp.delete('/api/movies/:id', MoviesController.deleteMovie);
    movieManagerApp.get('/api/movies/:id', MoviesController.movie);
    
    return movieManagerApp;
}