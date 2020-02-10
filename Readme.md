# EasyCrud

EasyCrud makes exposing nodejs CRUD routes simple. All you need to do is provide an httpHandler (only express is supported at this time),  a dbConnection (only knex is supported at this time) and a database schema file.

See examples/routes/UserRoutes to see just how easy it is to use this module


# Developer Notes

## How to run and create db migrations

### Create New
```knex migrate:make migration_name```

### Migrate to Latest
```knex migrate:latest```


# Contributor notes

## TODO list
- use schema to return 400's on bad requests before hitting the db