import {MovieManagerDbSingleton} from "../models/db.singleton.model";
import * as MongoInMemory from "mongo-in-memory";

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

	const movieDb = new MovieManagerDbSingleton();

	movieDb.connect()
		.then((votifyDb) => {
			console.log("db connection established");
		});

});