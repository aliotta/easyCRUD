# EasyCrud

EasyCrud makes exposing nodejs CRUD routes simple. All you need to do is provide an httpHandler (only express is supported at this time),  a dbConnection (only knex is supported at this time) and a database schema file.

See examples/routes/UserRoutes to see just how easy it is to use this module


# Developer Notes

## How to start devserver
```nvm use```
```npm install```
```npm install -g knex```
```knex migrate:latest```
```npm run startdev```

## Testing
```npm run test```

## How to run and create db migrations

### Create New
```knex migrate:make migration_name```

### Migrate to Latest
```knex migrate:latest```


# Contributor notes

## TODO list
- allow user to provide middleware on a route by route basis
- allow user to specify which routes get exposed
- use schema to return 400's on bad requests before hitting the db
- 100% test coverage of src files
- 100% mutation test coverage of src files