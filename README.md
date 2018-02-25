# Full stack typescript project

##installation
- run `$ npm installAll` in root of the repo
- run application with `$ npm run dev`

##configuration
request header for all client requests should be set to `content-type` should be set to `application/json`

## TODO's
- create models for application endpoints
- create validators for models
- create ip or other service to prevent users from brute forcing tracks to the database
- integration with votify frontend angular 2 app
- make connection with spotify api ?
- make OTAP build scripts (currently only devmode available)

## known issues
- port 3000 in use
-- fix by checking which app is using port by "$ sudo lsof -i :3000" & kill by using "$ sudo kill -9 <PID>"

