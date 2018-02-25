# Full stack typescript project

##installation
- run `$ npm installAll` in root of the repo
- run application with `$ npm run dev`

##configuration
request header for all client requests should be set to `content-type` should be set to `application/json`

## TODO's
- implement strict schema's with mongoose
- add testing framework
- create repository class for mongo connection
- make OTAP build scripts (currently only devmode available)

## known issues
- port 3000 in use
-- fix by checking which app is using port by "$ sudo lsof -i :3000" & kill by using "$ sudo kill -9 <PID>"

