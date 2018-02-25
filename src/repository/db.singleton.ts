var mongodb = require('mongodb');
import * as mongodb from 'mongodb';
import {Promise} from 'es6-promise';

export class VotifyDbSingleton {
    public db: any;
    private dbName: string;
    private dbPassword: string;
    private dbUri: string;
    private mongoClient: any;
    private localDbUri: string;
    private static instance: VotifyDbSingleton;


    constructor() {
        this.dbPassword = "votify12345";
        this.dbName = "test";
        this.mongoClient = mongodb.MongoClient;
        this.dbUri = "mongodb://votify:votify12345@cluster0-shard-00-00-elmgd.mongodb.net:27017,cluster0-shard-00-01-elmgd.mongodb.net:27017,cluster0-shard-00-02-elmgd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
        this.localDbUri = "mongodb://localhost:27017/votify";

        if (VotifyDbSingleton.instance) {
            return VotifyDbSingleton.instance;
        }

        VotifyDbSingleton.instance = this;
    }

    public connect () {
        return new Promise<string>((resolve, reject) => {
            this.mongoClient.connect(this.dbUri, (err, database) => {
                if (err) return console.log(err);
                this.db = database;
                resolve(this.db);
            });
        });
    }
}
