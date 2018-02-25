import "./conf/db.ts"
import * as express from "express"
import {movieManagerAppAddRoutes} from "./conf/routes";
import {movieManagerAppAddConfig} from "./conf/config";

let movieManagerApp = express();
movieManagerApp = movieManagerAppAddConfig(movieManagerApp);
movieManagerApp = movieManagerAppAddRoutes(movieManagerApp);

movieManagerApp.listen(9000, () => console.log('listening on 9000'));

