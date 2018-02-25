"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb = require('mongodb');
var mongodb = require("mongodb");
var es6_promise_1 = require("es6-promise");
var VotifyDbSingleton = (function () {
    function VotifyDbSingleton() {
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
    VotifyDbSingleton.prototype.connect = function () {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.mongoClient.connect(_this.dbUri, function (err, database) {
                if (err)
                    return console.log(err);
                _this.db = database;
                resolve(_this.db);
            });
        });
    };
    return VotifyDbSingleton;
}());
exports.VotifyDbSingleton = VotifyDbSingleton;
