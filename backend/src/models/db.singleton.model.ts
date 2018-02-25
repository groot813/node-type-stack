import {Db, MongoClient} from "mongodb";

export class MovieManagerDbSingleton {
    public static db: Db;
    private static dbName: string = "app";
    private static dbPassword: string = "password";
    private static dbUri: string = "mongodb://127.0.0.1:8002";
    private static mongoClient: MongoClient =  new MongoClient();
    private static localDbUri: string = "mongodb://127.0.0.1:8002";
    private static instance: MovieManagerDbSingleton;

    constructor() {
        if (MovieManagerDbSingleton.instance) {
            return MovieManagerDbSingleton.instance;
        }

        MovieManagerDbSingleton.instance = this;
    }

    public connect () {
        return new Promise<string>((resolve, reject) => {
            MovieManagerDbSingleton.mongoClient.connect(MovieManagerDbSingleton.dbUri, (err, database) => {
                if (err) return console.log(err);
                MovieManagerDbSingleton.db = database.db(MovieManagerDbSingleton.dbName);
                resolve(MovieManagerDbSingleton.db);
            });
        });
    }
}
