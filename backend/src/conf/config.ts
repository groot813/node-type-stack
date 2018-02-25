import {Express} from "express"
import * as bodyParser from "body-parser";

export function movieManagerAppAddConfig(movieManagerApp: Express): Express {
    movieManagerApp.use(bodyParser.json());
    movieManagerApp.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        res.setHeader('Content-Type', 'application/json');
        next();
    });

    return movieManagerApp;
}