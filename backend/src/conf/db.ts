import {MovieManagerDbSingleton} from "../models/db.singleton.model";

const MongoInMemory = require('mongo-in-memory');
const port = 8006;
const mongoServerInstance = new MongoInMemory(port); //DEFAULT PORT is 27017

mongoServerInstance.start((error, config) => {

    if (error) {
        console.error(error);
    } else {

        //callback when server has started successfully

        console.log("HOST " + config.host);
        console.log("PORT " + config.port);

        const mongouri = mongoServerInstance.getMongouri("myDatabaseName");

    }

    mongoServerInstance.stop((error) => {

        if (error) {
            console.error(error);
        } else {
            //callback when server has stopped successfully
        }

    });

    const votifyDb = new MovieManagerDbSingleton();

    votifyDb.connect().then((votifyDb) => {
        console.log("db connection established");
    });

});

